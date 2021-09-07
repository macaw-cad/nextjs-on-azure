const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");
let nextPath;

// Locally we get this dependency with lerna, on the server we use a different path
if (fs.existsSync("jss-nextjs-app-copy")) {
    nextPath = require("./jss-nextjs-app-copy/.next/BUILD_ID");
} else {
    nextPath = path.dirname(require.resolve("@nextjsonazure/jss-nextjs-app/.next/BUILD_ID"));
}

module.exports = async function (context, req) {
    const staticFilePath = req?.query?.path;

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