const fs = require('fs').promises;
const path = require("path");

const isOnAzure = process.env.NEXTJS_ON_AZURE || false;

if (isOnAzure) {
    nextPath = path.dirname(require.resolve("../../basic-nextjs-example/.next/BUILD_ID"));
} else {
    nextPath = path.dirname(require.resolve("@nextjsonazure/basic-nextjs-example/.next/BUILD_ID"));
}

module.exports = async function (context, req) {
    const staticFilePath = req?.query?.path;

    try {
        const data = await fs.readFile(path.join(nextPath, "static", staticFilePath));

        return {
            body: data
        }

    } catch {
        return {
            body: `File not found ${JSON.stringify(req.query)}`
        }
    }
}