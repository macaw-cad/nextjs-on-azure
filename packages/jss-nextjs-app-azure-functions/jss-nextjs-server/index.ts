// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }

import { Context, HttpRequest } from "@azure/functions";
import { NextServer } from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/server/next"
// import { ServerConstructor } from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/next-server/server/next-server"; 
// import { NextConfig } from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/next-server/server/config-shared";    
import { IncomingMessage, ServerResponse } from 'http';
const { parse } = require('url')

// // interface NextOptions extends ServerConstructor {
// //     conf?: NextConfig
// // }

let next: (options: any) => NextServer | undefined;

// // on azure the jss-nextjs-app is lerna symlink doesnt work
const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
    next = require("../../../jss-nextjs-app/node_modules/next");
} else {
    next = require("@nextjsonazure/jss-nextjs-app/node_modules/next")
}

const app: NextServer | undefined = next({ 
    dev: false,
    conf: {
        distDir: "../jss-nextjs-app/.next",
    }
});

const handle = app.getRequestHandler();

module.exports = async function (context, req) {
    await app.prepare();
    
    const parsedUrl2 = parse("/", true)

    try {    
        await handle(context.req, context.res, parsedUrl2);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: JSON.stringify(e)
        };
    }
}