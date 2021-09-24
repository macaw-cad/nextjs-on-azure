const fs = require("fs"); // Or `import fs from "fs";` with ESM

import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { editingDataDiskCache } from "../lib/editingDataCache";

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
    
    const customContextRes: any = context.res;

    customContextRes.status = (statusCode: number) => {
        customContextRes.status = statusCode;

        return customContextRes;
    }

    customContextRes.json = (body) => {
        customContextRes.body = body;

        return customContextRes;
    }

    const customContextReq = {
        ...context.req,
    }

    customContextReq.query.key = context.req.params.path
    
    try {
        // @ts-ignore
        await handler(customContextReq, customContextRes);
    } catch (e) {
        context.log(e);
        context.res = {
            status: 500
        };
    }

};

export default httpTrigger;