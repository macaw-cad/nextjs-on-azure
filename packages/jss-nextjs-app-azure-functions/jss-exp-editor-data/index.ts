const fs = require("fs"); // Or `import fs from "fs";` with ESM

import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { editingDataDiskCache } from "../lib/editingDataCache";
import { getNextResponseHandler } from "../lib/nextResponseHandler";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

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