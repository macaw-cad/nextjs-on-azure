import { useState } from "react"

function Commerce() {
  const [count, setCount] = useState(0);

  return (
    <>
        <h1>Commerce!!</h1>

        {count}

        <br />
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [{"params":{"path":["styleguide"]}}],
    fallback: 'blocking'
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps = async (
  // context
) => {
  console.log("getStaticProps");

  return {
    props: {
      henk: 1
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    // notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};


export default Commerce