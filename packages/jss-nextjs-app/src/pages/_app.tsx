import Head from "next/head";
import type { AppProps } from "next/app";
import Router from "next/router";
import { I18nProvider } from "next-localization";
import NProgress from "nprogress";

// Using bootstrap and nprogress are completely optional.
//  bootstrap is used here to provide a clean layout for samples, without needing extra CSS in the sample app
//  nprogress provides a loading indicator on page/route changes
// Remove these in package.json as well if removed here.
import "nprogress/nprogress.css";
import "../scss/main.scss";

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }: AppProps): JSX.Element {
  // @ts-ignore
  const { dictionary, ...rest } = pageProps;

  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
      // Note Next.js does not (currently) provide anything for translation, only i18n routing.
      // If your app is not multilingual, next-localization and references to it can be removed. */}
      {/* @ts-ignore */}
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        {/* @ts-ignore */}
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}

export default App;
