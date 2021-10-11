The Next.js website is served through multiple Azure functions. The `basic-nextjs-azure-functions` package contains these functions.

## Provided functions

`nextjsserver` - The actual Next.js web server, including [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration).

`serveStaticFile` - A function to serve all static files from the `_next/static` path.


Handling of routing is managed through the Azure functions proxy functionality as configured in [`proxies.json`](proxies.json):

- `_next/static/*` files are redirected to the `serveStaticFile` function
- all other files are redirected to the `nextjsserver` function