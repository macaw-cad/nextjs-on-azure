const next = require('next')

const dev = false
let app;
let handle;

module.exports = async function (context, req) {
    const path = req?.params?.remainingPath ? `/${req?.params?.remainingPath}` : "/index"

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

    const reqUrl = {
        pathname: path,
        path: path,
        href: path
    }
    try {
        await handle(req, context.res, reqUrl);
    } catch(e) {
        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}