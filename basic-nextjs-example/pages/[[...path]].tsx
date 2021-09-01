import { useState } from "react"

export const getStaticPaths = async (
  // context
  ) => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration

  if (process.env.NODE_ENV !== 'development') {
    // Note: Next.js runs export in production mode
    
    // const paths = await sitemapFetcher.fetch(context);
    // const paths = [];
    
    const paths: any = [
      {"params":{"path":["styleguide1"]}},
      {"params":{"path":["styleguide2"]}}
    ]

    paths.forEach((path: any) => {
      console.error("path", JSON.stringify(path));
    })

    return {
      paths,
      fallback: process.env.EXPORT_MODE ? false : 'blocking',
    };
  }

  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async (
  context
) => {
  // const props = await sitecorePagePropsFactory.create(context);

  console.log("context.path", JSON.stringify(context));

  return {
    // props,
    props: { path: context.params.path ? context.params.path[0] : null },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    // notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};

function Commerce(props) {
  const [count, setCount] = useState(0);

  console.log({props});

  return (
    <>
        <h1>Commerce!!</h1>

        {count}

        <br />
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

export default Commerce