const fs = require("fs");
const { URL } = require("url");
let next;


// on azure the jss-nextjs-app is lerna symlink doesnt work
const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
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
                    distDir: "../jss-nextjs-app/.next",
                    i18n: {
                        // These are all the locales you want to support in your application.
                        // These should generally match (or at least be a subset of) those in Sitecore.
                        locales: ['en', 'da-DK'],
                        // This is the locale that will be used when visiting a non-locale
                        // prefixed path e.g. `/styleguide`.
                        defaultLocale: "en",
                    }
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