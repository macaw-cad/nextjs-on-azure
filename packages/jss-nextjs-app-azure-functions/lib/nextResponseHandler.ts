import { Context } from "@azure/functions";
import { setPreviewData } from "./previewData";

export const getNextResponseHandler = (context: Context) => {

    const nextContextRes: any = context.res;

    nextContextRes.status = (statusCode: number) => {
        nextContextRes.status = statusCode;

        return nextContextRes;
    }

    nextContextRes.json = (body: string) => {
        nextContextRes.body = JSON.stringify(body).replace(/\/_next\//g, `${process.env.PUBLIC_URL}/_next/`);
       
        return nextContextRes;
    }

    nextContextRes.setPreviewData = (previewData: string) => {
        const manifest = require("../../../jss-nextjs-app/.next/prerender-manifest.json");
        
        const cookies = setPreviewData(previewData, manifest.preview as any);

        nextContextRes.headers = {
            'Set-Cookie': cookies.join(';'),
            'Content-Type': "application/json; charset=utf-8"
        };
    };

    nextContextRes.getHeader = (header: string) => {
        return context.res.headers[header].split(";");
    }

    return nextContextRes;
}