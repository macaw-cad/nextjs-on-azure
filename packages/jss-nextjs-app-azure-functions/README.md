The Sitecore JSS Next.js website is served through multiple Azure functions. The `jss-nextjs-app-azure-functions` package contains these functions.

## Provided functions

`jss-nextjs-server` - The actual Next.js web server, including [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration).

`jss-exp-editor-render` - A function to handle the render calls from the Sitecore Experience Editor.

`jss-exp-editor-data` - A function to handle the data calls from the Sitecore Experience Editor.