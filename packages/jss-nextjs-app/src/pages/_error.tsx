import { NextPage } from 'next';
import Head from 'next/head';

interface ErrorPageProps {
  statusCode?: number | null | undefined;
  res: any;
  err: any;
}

/**
 * Rendered in case if we have 500 error, used only in Production mode
 * @link https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page
 */
const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, res, err }) => (
  <>
    <Head>
      <title>Error</title>
    </Head>
    <div style={{ padding: 10 }}>
      <p>
        {statusCode ? `An error ${statusCode} occurred on the server` : 'An error occurred on client'}
      </p>
      <p>
         {JSON.stringify(res)}
      </p>
      <p>
        {JSON.stringify(err)}
      </p>
      <a href="/">Go to the Home page</a>

    </div>
  </>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode, res, err };
};

export default ErrorPage;
