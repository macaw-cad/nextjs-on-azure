let next;
const dev = false
let app;
let handle;

const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
    next = require("../../basic-nextjs-example/node_modules/next");
} else {
    next = require("@nextjsonazure/basic-nextjs-example/node_modules/next")
}

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
                compress: false,
                distDir: '../basic-nextjs-example/.next'
            }
        });

        await app.prepare();
        handle = app.getRequestHandler();
    }

    const path = (req?.params?.remainingPath && req?.params?.remainingPath !== "nextjsserver") ? `/${req?.params?.remainingPath}` : "/index"
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