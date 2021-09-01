const fs = require('fs').promises;

module.exports = async function (context, req) {
    const path = req?.query?.path;

    const filepath = `${path}`.replace("_next/", "");
    
    try {
        const data = await fs.readFile(".next/" + filepath);

        return {
            body: data
        }

    } catch {
        return {
            body: `File not found ${JSON.stringify(req.query)}`
        }
    }
}