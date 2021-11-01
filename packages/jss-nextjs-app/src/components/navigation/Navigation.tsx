import Link from "next/link";
import { ComponentProps } from "lib/component-props";
import {
  NavigationLink,
  Navigation as UINavigation,
} from "@nextjsonazure/ui-components/src/components/core/navigation/Navigation";
import React from "react";

type Result = {
  pageTitle?: {
    value: string;
  };
  url?: {
    path: string;
  };
  children: {
    results: Result[];
  };
  id: string;
};

type Data = {
  item: {
    children: {
      results: Result[];
    };
  };
};

type NavigationProps = ComponentProps & {
  fields: {
    data: Data;
  };
};

const mapToNavigationLinks = (navigationProps: NavigationProps): NavigationLink[] => {
  const fields = navigationProps.fields;
  const navigationLinks: NavigationLink[] = [];

  fields.data.item.children.results.forEach((child) => {
    const grandChildren = child.children.results.map((grandChild) => {
      return {
        text: grandChild.pageTitle?.value,
        url: grandChild.url?.path,
      };
    });

    grandChildren.unshift({
      text: child.pageTitle?.value,
      url: child.url?.path,
    });

    navigationLinks.push({
      text: child.pageTitle?.value,
      url: child.url?.path,

      children: child.children.results.length > 0 ? grandChildren : undefined,
    });
  });

  return navigationLinks;
};

const Navigation: React.FC<NavigationProps> = (props): JSX.Element => {
  return (
    <header className="header mb-4">
      <div className="container">
        <Link href="/">
          <a className="header__logo">
            <img
              width="176"
              height="47"
              src="-/media/jss-nextjs-app/data/media/img/sitecore-jss-azure-logo.ashx"
            />
          </a>
        </Link>

        <UINavigation links={mapToNavigationLinks(props)} className="header__menu" />
      </div>
    </header>
  );
};

export default Navigation;
