const fs = require('fs').promises;

(async () => {
    const packageJson = "./dist/package.json";

    const data = await fs.readFile(packageJson, 'utf8');
    const result = data.replace('"@nextjsonazure/ui-components": "*"', '"@nextjsonazure/ui-components": "file:../../../ui-components"');
    await fs.writeFile(packageJson, result,'utf8');
})();