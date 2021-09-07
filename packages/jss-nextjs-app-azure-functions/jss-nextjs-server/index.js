const next = require('next');
const dev = false;
const { URL } = require('url');
let app;
let handle;

module.exports = async function (context, req) {
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
                    // distDir: '../../../data/erwin/.next',
                }
            });

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

    const path = (req?.params?.remainingPath && req?.params?.remainingPath !== "nextjsserver") ? `/${req?.params?.remainingPath}` : "/index"
    const parsedUrl = new URL(`https://randombaseurl.nl${path}`);

    // This fixes the "__nextlocale of undefined" bug
    parsedUrl.query = {};
    
    try {
        await handle(req, context.res, parsedUrl);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}