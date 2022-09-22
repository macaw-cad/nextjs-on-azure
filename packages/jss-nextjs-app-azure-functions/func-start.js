try {
    const {execSync} = require('child_process')
    require('dotenv').config({ path: `./env.${process.env.NODE_ENV}` })
    
    execSync("npm run build", {stdio: 'inherit'})
    execSync("npm run func-start", {stdio: 'inherit'})

} catch (e) {
    console.error(e);
}