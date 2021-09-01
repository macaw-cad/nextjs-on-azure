const next = require('next')
const dev = false;
// const { parse } = require('url');
const { URL } = require('url');
let app;
let handle;

module.exports = async function (context, req) {

    if (!app) {
        app = next({ 
            dev,
            conf: {
                /* 
                    This flag is required to prevent the "implicit header is not a function" error
                    see: https://www.gitmemory.com/issue/zeit/next.js/8407/522278225

                    Because gzipping can and should be enabled on the CDN this is not a problem:
                    https://docs.microsoft.com/en-us/azure/cdn/cdn-improve-performance
                */
                compress: false
            }
        });

        await app.prepare();
        handle = app.getRequestHandler();
    }

    // console.log(JSON.stringify(req));
    // const path = "/styleguide";
    // console.log("req.url", req.url);

    const path = (req?.params?.remainingPath && req?.params?.remainingPath !== "nextjsserver") ? `/${req?.params?.remainingPath}` : "/index"
    const parsedUrl = new URL(`https://maaktnietuit.nl${path}`);

    parsedUrl.query 

    console.log({parsedUrl});
    console.log("path", path);
    // console.log(JSON.stringify(parsedUrl));

    // const parsedUrl = {
    //     pathname: path,
    //     path: path,
    //     href: path,
    //     query: {}
    // }


    // This fixes the "__nextlocale of undefined" bug
    parsedUrl.query = {};

    try {
        await handle(req, context.res, parsedUrl);
    } catch(e) {
        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}