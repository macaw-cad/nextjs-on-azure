The Sitecore JSS Next.js website is served through multiple Azure functions. The `jss-nextjs-app-azure-functions` package contains these functions.

## Provided functions

`jss-nextjs-server` - The actual Next.js web server, including [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration).

`jss-serve-static-file` - A function to serve all static files from the `_next/static` path.

`jss-disconnected-mode-proxy` - A function to act as a proxy to the JSS disconnected mode server running at http://localhost:3042, started from the `jss-nextjs-app` package.

`jss-exp-editor-render` - A function to handle the render calls from the Sitecore Experience Editor.

`jss-exp-editor-data` - A function to handle the data calls from the Sitecore Experience Editor.

Handling of routing is managed through the Azure functions proxy functionality as configured in [`proxies.json`](proxies.json):

- `_next/static/*` files are redirected to the `jss-serve-static-file` function
- `-/*` Sitecore media files are redirected to the Sitecore Content Management server on dev, test, acceptance (DTA), and to the Sitecore Content Delivery server on production (P)
- `/api/editing/render/*` files are redirected to the `jss-exp-editor-render` function
- `/api/editing/data/*` files are redirected to the `jss-exp-editor-data` function
- all other files are redirected to the `nextjsserver` function