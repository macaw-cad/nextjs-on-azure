import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EditingDataMiddleware } from '@nextjsonazure/jss-nextjs-app/node_modules/@sitecore-jss/sitecore-jss-nextjs/middleware';
import { NextApiRequest } from "@nextjsonazure/jss-nextjs-app/node_modules/next";
import os from 'os';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    const editingData = {
        set: () => { /* */ },
        get: () =>  undefined
    }

    const handler = new EditingDataMiddleware({ editingDataCache: editingData }).getHandler();
    
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