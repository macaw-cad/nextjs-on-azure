import { Context, HttpRequest } from "@azure/functions";
import { NextServer } from "@nextjsonazure/basic-nextjs-example/node_modules/next/dist/server/next"
import { ServerConstructor} from "@nextjsonazure/basic-nextjs-example/node_modules/next/dist/next-server/server/next-server"; 
import { NextConfig } from "@nextjsonazure/basic-nextjs-example/node_modules/next/dist/next-server/server/config-shared";    
import { IncomingMessage, ServerResponse } from 'http';
interface NextOptions extends ServerConstructor {
    conf?: NextConfig
}

let next: (options: NextOptions) => NextServer | undefined;
let app: NextServer | undefined;
let handle: (req: IncomingMessage, res: ServerResponse, parsedUrl?: URL | undefined) => Promise<any> | undefined;

const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
    next = require("../../basic-nextjs-example/node_modules/next");
} else {
    next = require("@nextjsonazure/basic-nextjs-example/node_modules/next")
}

module.exports = async function (context: Context, req: HttpRequest) {
    if (!app) {
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
                distDir: '../basic-nextjs-example/.next',
                future: {
                    excludeDefaultMomentLocales: false,
                    strictPostcssConfiguration: false,
                    webpack5: false
                }
            }
        });

        await app.prepare();
        // @ts-ignore nextjs type for parsedUrl is incorrect
        handle = app.getRequestHandler();
    }

    const path = (req?.params?.remainingPath && req?.params?.remainingPath !== "nextjsserver") ? `/${req?.params?.remainingPath}` : "/index"
    
    const protocol = req.url.includes("https") ? "https://" : "http://";
    const parsedUrl = new URL(`${path}`, `${protocol}${process.env.WEBSITE_HOSTNAME}`);

    // This fixes the "__nextlocale of undefined" bug
    // @ts-ignore nextjs expects an object here, ts a string...
    parsedUrl.search = {};

    try {
        await handle(req as unknown as IncomingMessage, context.res as unknown as ServerResponse, parsedUrl);
    } catch(e) {
        context.res = {
            status: 500,
            body: path + JSON.stringify(e)
        };
    }
}