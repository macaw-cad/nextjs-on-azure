const fs = require('fs').promises;
const path = require("path");

const nextPath = path.dirname(require.resolve("@nextjsonazure/jss-nextjs-app/.next/BUILD_ID"));

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