import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EditingDataDiskCache } from "../lib/editingDataCache";
import { getNextResponseHandler } from "../lib/nextResponseHandler";
import os from 'os';

const isOnAzure = process.env.NEXTJS_ON_AZURE || false;
const editingDataDiskCache = new EditingDataDiskCache(isOnAzure ? "C:\\home\\data\\temp" : os.tmpdir())

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const EditingDataMiddleware = require(`${process.env.NEXT_BUILD_ROOT}/node_modules/@sitecore-jss/sitecore-jss-nextjs/middleware`).EditingDataMiddleware;
    
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