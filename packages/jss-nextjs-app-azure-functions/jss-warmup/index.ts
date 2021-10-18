import { AzureFunction, Context } from "@azure/functions";
const https = require("https");
const http = require("http");

const warmupFunction: AzureFunction = async function (context: Context) {
    var timeStamp = new Date().toISOString();
    context.log('warmupFunction ran!', timeStamp);   

    const baseUrl = process.env.PUBLIC_URL;
    const httpFunction = baseUrl.includes("https") ? https : http;

    httpFunction.get(`${baseUrl}/_next/static/test.css`, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

    httpFunction.get(`${baseUrl}/index`, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

    httpFunction.get(`${baseUrl}/jss-exp-editor-render`, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

    httpFunction.get(`${baseUrl}/jss-editor-data`, () => {
        // not interested in the results, we just want to warmup
    }).on('error', err => {
        context.log('Error: ', err.message);
    });

};

export default warmupFunction;