import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EditingDataDiskCache } from "../lib/editingDataCache";
import { getNextResponseHandler } from "../lib/nextResponseHandler";
import os from 'os';
import { warmupHeader } from "../lib/warmupHeader";

const isOnAzure = process.env.NEXTJS_ON_AZURE || false;
const editingDataDiskCache = new EditingDataDiskCache(isOnAzure ? "C:\\home\\data\\temp" : os.tmpdir())

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if (req.headers[warmupHeader]) {
        context.res = {
            status: 200
        }
    }

    const isBuildEnvironment = context.executionContext.functionDirectory.includes("www");

    let EditingDataMiddleware;
    
    if (isBuildEnvironment) {
        EditingDataMiddleware = require('../../../jss-nextjs-app/node_modules/@sitecore-jss/sitecore-jss-nextjs/middleware').EditingDataMiddleware;
    } else {
        EditingDataMiddleware = require('@nextjsonazure/jss-nextjs-app/node_modules/@sitecore-jss/sitecore-jss-nextjs/middleware').EditingDataMiddleware;
    }

    const handler = new EditingDataMiddleware({
        editingDataCache: editingDataDiskCache
    }).getHandler();
    
    const nextResponseHandler = getNextResponseHandler(context);

    const customContextReq = {
        ...context.req,
    }

    customContextReq.query.key = context.req.params.path;

    // TODO: How will this work when language is dynamic?
    customContextReq.query["__nextDefaultLocale"] = "en";
    customContextReq.query["__nextLocale"] = "en";
    
    try {
        // @ts-ignore
        await handler(customContextReq, nextResponseHandler);
    } catch (e) {
        context.log(e);
        context.res = {
            status: 500
        };
    }

};

export default httpTrigger;