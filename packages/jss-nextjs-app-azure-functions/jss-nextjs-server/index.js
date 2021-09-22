const fs = require("fs"); // Or `import fs from "fs";` with ESM
const { URL } = require("url");
let next;


// on build env the jss-nextjs-app is copied into the azure function app
// azcopy deploy test
const isBuildEnvironment = fs.existsSync("../jss-nextjs-app/node_modules/next");

if (isBuildEnvironment) {
    next = require("../../jss-nextjs-app/node_modules/next");
} else {
    next = require("@nextjsonazure/jss-nextjs-app/node_modules/next")
}

const dev = false;
let app;
let handle;

module.exports = async function (context, req) {
    const path = (context.req?.params?.remainingPath && context.req?.params?.remainingPath !== "nextjsserver") ? `/${context.req?.params?.remainingPath}` : "/index"
   
    if (!app) {
        try {
            app = next({ 
                dev,
                conf: {
                    /* 
                        This flag is required to prevent the "implicit header is not a function" error
                        see: https://www.gitmemory.com/issue/zeit/next.js/8407/522278225

                        Because gzipping can and should be enabled on the CDN this is not a problem:
                        https://docs.microsoft.com/en-us/azure/cdn/cdn-improve-performance
                    */
                    compress: false,
                    distDir: "../jss-nextjs-app/.next"
                }
            });

            // context.res = {
            //     status: 200,
            //     body: JSON.stringify(context.req.body)
            // }

            await app.prepare();
            handle = app.getRequestHandler();
        } catch(e) {
            console.error(e);
            context.res = {
                status: 500,
                body: path + JSON.stringify(e)
            };
        }
    }

    const parsedUrl = new URL(`https://randombaseurl.nl${path}`);

    // This fixes the "__nextlocale of undefined" bug
    parsedUrl.query = {};

    try {    
        // context.res = {
        //     status: 200,
        //     body: JSON.stringify(context.req.body)
        // }
        await handle(context.req, context.res, parsedUrl);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}