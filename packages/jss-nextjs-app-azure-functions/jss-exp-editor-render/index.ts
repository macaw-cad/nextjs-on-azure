import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EditingRenderMiddleware } from '@nextjsonazure/jss-nextjs-app/node_modules/@sitecore-jss/sitecore-jss-nextjs/middleware';
import { NextApiRequest } from "@nextjsonazure/jss-nextjs-app/node_modules/next";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    // Wire up the EditingRenderMiddleware handler
    const handler = new EditingRenderMiddleware().getHandler();
    
    const customContextRes: any = context.res;

    customContextRes.status = (statusCode: number) => {
        customContextRes.status = statusCode;

        return customContextRes;
    }

    customContextRes.json = (jsonData) => {
        customContextRes.body = JSON.stringify(jsonData);

        return customContextRes;
    }

    try {
        // @ts-ignore
        await handler(context.req, customContextRes);

    } catch (e) {
        context.log(e);
        context.res = {
            status: 500
        };
    }

};

export default httpTrigger;
