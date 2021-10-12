import { Context, HttpRequest } from "@azure/functions";
import { NextServer } from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/server/next"
import { ServerConstructor} from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/next-server/server/next-server"; 
import { NextConfig } from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/next-server/server/config-shared";    
import { IncomingMessage, ServerResponse } from 'http';
interface NextOptions extends ServerConstructor {
    conf?: NextConfig
}

let next: (options: NextOptions) => NextServer | undefined;
let app: NextServer | undefined;
let handle: (req: IncomingMessage, res: ServerResponse, parsedUrl?: URL | undefined) => Promise<any> | undefined;

// on azure the jss-nextjs-app is lerna symlink doesnt work
const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
    next = require("../../jss-nextjs-app/node_modules/next");
} else {
    next = require("@nextjsonazure/jss-nextjs-app/node_modules/next")
}


module.exports = async function (context, req) {
    const path = (context.req?.params?.remainingPath && context.req?.params?.remainingPath !== "nextjsserver") ? `/${context.req?.params?.remainingPath}` : "/index"
   
    if (!app) {
        try {
            app = next({ 
                dev: false,
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
                    },
                    future: {
                        excludeDefaultMomentLocales: false,
                        strictPostcssConfiguration: false,
                        webpack5: false
                    },
                    experimental: {}
                }
            });


            await app.prepare();
            // @ts-ignore nextjs type for parsedUrl is incorrect
            handle = app.getRequestHandler();
        } catch(e) {
            console.error(e);
            context.res = {
                status: 500,
                body: path + JSON.stringify(e)
            };
        }
    }

    const protocol = req.url.includes("https") ? "https://" : "http://";
    const parsedUrl = new URL(`${path}`, `${protocol}${process.env.WEBSITE_HOSTNAME}`);

    // This fixes the "__nextlocale of undefined" bug
    // @ts-ignore nextjs expects an object here, ts a string...
    parsedUrl.query = {};

    try {    
        await handle(context.req, context.res, parsedUrl);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}