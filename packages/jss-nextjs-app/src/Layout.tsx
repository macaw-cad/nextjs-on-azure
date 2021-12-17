import Head from "next/head";
import { useEffect } from "react";
import { getPublicUrl } from "lib/util";
import { Placeholder, VisitorIdentification, useSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs";
import { StyleguideSitecoreContextValue } from "lib/component-props";

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.

type LayoutProps = {
  context: StyleguideSitecoreContextValue;
};

const Layout = ({ context }: LayoutProps): JSX.Element => {
  const { updateSitecoreContext } = useSitecoreContext({ updatable: true });

  // Update Sitecore Context if layoutData has changed (i.e. on client-side route change).
  // Note the context object type here matches the initial value in [[...path]].tsx.
  useEffect(() => {
    updateSitecoreContext && updateSitecoreContext(context);
  }, [context]);

  const { route } = context;

  return (
    <>
      <Head>
        <title>{route?.fields?.pageTitle?.value || "Page"}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>

      <div className="page">
        {/*
          VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
          If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
          For XM (CMS-only) apps, this should be removed.

          VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
        */}
        <VisitorIdentification />

        <Placeholder name="jss-header" rendering={route} />

        {/* root placeholder for the app, which we add components to using route data */}
        <main>
          <Placeholder name="jss-main" rendering={route} />
        </main>
      </div>
    </>
  );
};

export default Layout;
