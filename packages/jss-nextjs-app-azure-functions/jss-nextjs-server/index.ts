import { Context, HttpRequest } from "@azure/functions";
import { NextServer, NextServerOptions } from "@nextjsonazure/jss-nextjs-app/node_modules/next/dist/server/next"
import { IncomingMessage, ServerResponse } from 'http';

let app: NextServer | undefined;
let handle: (req: IncomingMessage, res: ServerResponse, parsedUrl?: URL | undefined) => Promise<any> | undefined;
const next: (options: NextServerOptions) => NextServer | undefined = require(`${process.env.NEXT_BUILD_ROOT}/node_modules/next`);

module.exports = async function (context: Context, req: HttpRequest) {
    const remainingPath = context.req?.query?.remainingPath || "/index";

    const path = remainingPath.startsWith("/") ? remainingPath : `/${remainingPath}`;

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
                    }
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

            return;
        }
    }

    // Overwriting the path fixed the next12 update issues
    context.req.url = path;

    try {    
        // @ts-ignore 
        await handle(context.req, context.res);
    } catch(e) {
        console.error(e);

        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}