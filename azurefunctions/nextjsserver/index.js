// server.js
const next = require('next')

const dev = false
let app;
let handle;

module.exports = async function (context, req) {
    // const path = req?.query?.path;
    const path = req?.params?.remainingPath ? `/${req?.params?.remainingPath}` : "/index"


    if (!app) {
        app = next({ 
            dev,
            conf: {
               compress: false
            }
        });

        await app.prepare();
        handle = app.getRequestHandler();
    }

    // const reqUrl = "/staticapi"; 
    const reqUrl =  {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
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