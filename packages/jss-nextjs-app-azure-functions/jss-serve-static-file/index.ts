import { Context, HttpRequest } from "@azure/functions";
import { warmupHeader } from "../lib/warmupHeader";
const fsPromises = require("fs").promises;
const path = require("path");
let nextPath: string | undefined;


// Locally we get this dependency with lerna, on the server we use a different path
const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
    nextPath = path.dirname(require.resolve("../../../jss-nextjs-app/.next/BUILD_ID"));
} else {
    nextPath = path.dirname(require.resolve("@nextjsonazure/jss-nextjs-app/.next/BUILD_ID"));
}

module.exports = async function (context: Context, req: HttpRequest) {
    const staticFilePath = req?.query?.path;

    if (req.headers[warmupHeader]) {
        return {
            status: 200
        }
    }

    try {
        const data = await fsPromises.readFile(path.join(nextPath, "static", staticFilePath));

        return {
            body: data
        }

    } catch(e) {
        console.error(e);
        return {
            body: `File not found ${JSON.stringify(req.query)}`
        }
    }
}