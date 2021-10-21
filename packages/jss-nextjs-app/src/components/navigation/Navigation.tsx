import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
import { NavigationLink, Navigation as UINavigation } from "@nextjsonazure/ui-components/src/components/core/navigation/Navigation";
import React from 'react';

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

  fields.data.item.children.results.forEach(child => {
    const grandChildren = child.children.results.map(grandChild => {
        return { 
          text: grandChild.pageTitle?.value, 
          url: grandChild.url?.path 
        }
    })

    grandChildren.unshift({
      text: child.pageTitle?.value,
      url: child.url?.path,
    });
    
    navigationLinks.push({
      text: child.pageTitle?.value,
      url: child.url?.path,

      children: child.children.results.length > 0 
        ? 
        grandChildren
        : undefined
    })
  });

  return navigationLinks;
}

const Navigation: React.FC<NavigationProps> = (props): JSX.Element => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom" style={{borderBottom: "1px solid #dee2e6", justifyContent: "space-between"}}>
      <h5 className="my-0 font-weight-normal">
        <Link href="/">
          <a className="text-dark" style={{display: "flex", alignItems: "center", color: "#000", textDecoration: "none"}}>
            <h1 className="m-0 p-0 align-middle" style={{ display: 'inline-block' }}>
              Sitecore JSS @
            </h1>
            <img
              className="ml-1"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
              alt="Azure"
            />
          </a>
        </Link>
      </h5>

      <UINavigation links={mapToNavigationLinks(props)} />
    </div>
  );
};

export default Navigation;
