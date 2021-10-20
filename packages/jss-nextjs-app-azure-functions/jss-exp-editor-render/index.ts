import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getNextResponseHandler } from "../lib/nextResponseHandler";
const isOnAzure = process.env.NEXTJS_ON_AZURE || false;
const baseRequirePath = isOnAzure ? "../../../jss-nextjs-app" : "@nextjsonazure/jss-nextjs-app";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const EditingRenderMiddleware = require(`${baseRequirePath}/node_modules/@sitecore-jss/sitecore-jss-nextjs/middleware`).EditingRenderMiddleware;
    
    const baseUrl = process.env.PUBLIC_URL.slice(0, process.env.PUBLIC_URL.length - 1);
    
    const handler = new EditingRenderMiddleware({ resolveServerUrl: () => baseUrl }).getHandler();
    
    const nextResponseHandler = getNextResponseHandler(context);

    try {
        // @ts-ignore
        await handler(context.req, nextResponseHandler);

    } catch (e) {
        context.log(e);
        context.res = {
            status: 500
        };
    }

};

export default httpTrigger;
