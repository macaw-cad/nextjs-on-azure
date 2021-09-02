import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
// import { useI18n } from 'next-localization';
import { getPublicUrl } from 'lib/util';
import {
  Placeholder,
  LayoutServiceData,
  // useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
// import { StyleguideSitecoreContextValue } from 'lib/component-props';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
const Navigation = () => {
  // const { t } = useI18n();

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link href="/">
          <a className="text-dark">
            <img src={`${publicUrl}/sc_logo.svg`} alt="Sitecore" />
          </a>
        </Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a
          className="p-2 text-dark"
          href="https://jss.sitecore.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Documentation'}
        </a>
        <Link href="/styleguide">
          <a className="p-2 text-dark">{'Styleguide'}</a>
        </Link>
        <Link href="/graphql">
          <a className="p-2 text-dark">{'GraphQL'}</a>
        </Link>
      </nav>
    </div>
  );
};

type LayoutProps = {
  layoutData: LayoutServiceData;
};

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  // const { updateSitecoreContext } = useSitecoreContext({ updatable: true });

  // Update Sitecore Context if layoutData has changed (i.e. on client-side route change).
  // Note the context object type here matches the initial value in [[...path]].tsx.
  useEffect(() => {
    // const context: StyleguideSitecoreContextValue = {
    //   route: layoutData.sitecore.route,
    //   itemId: layoutData.sitecore.route.itemId,
    //   ...layoutData.sitecore.context,
    // };
    // updateSitecoreContext && updateSitecoreContext(context);
  }, [layoutData]);

  const { route } = layoutData.sitecore;

  return (
    <>
      <Head>
        <title>
          {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
        </title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>


      <Navigation />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container">
        <Placeholder name="jss-main" rendering={route} />
      </div>
    </>
  );
};

export default Layout;
