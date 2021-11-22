import { AzureFunction, Context } from "@azure/functions";
import { warmupHeader } from "../lib/warmupHeader";
const https = require("https");
const http = require("http");

const options = {
    headers: {[warmupHeader]: true}
};

const warmupFunction: AzureFunction = async function (context: Context) {
    var timeStamp = new Date().toISOString();
    const baseUrl = process.env.PUBLIC_URL;
    context.log('warmupFunction ran!', timeStamp);   

    const httpFunction = baseUrl.includes("https") ? https : http;

    httpFunction.get(`${baseUrl}/_next/static/test.css`, options, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

    httpFunction.get(`${baseUrl}/index`, options, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

    httpFunction.get(`${baseUrl}/jss-exp-editor-render`, options, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

    httpFunction.get(`${baseUrl}/jss-editor-data`, options, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

};

export default warmupFunction;