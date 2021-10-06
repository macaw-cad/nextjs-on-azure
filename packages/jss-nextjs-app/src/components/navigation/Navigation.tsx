import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
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

const Navigation: React.FC<NavigationProps> = ({ fields }): JSX.Element => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link href="/">
          <a className="text-dark">
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

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {fields.data.item.children.results.map((child) => {
              if (!child.pageTitle && child.url?.path) {
                return null;
              }

              return child.pageTitle && child.url?.path ? (
                <React.Fragment key={child.id}>
                  {child.children.results.length > 0 ? (
                    <li className="nav-item dropdown">
                      <a
                        className={`nav-link ${
                          child.children.results.length > 0 ? 'dropdown-toggle' : ''
                        }`}
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {child.pageTitle.value}
                      </a>

                      <div className="dropdown-menu">
                        <Link href={child.url.path}>
                          <a className="dropdown-item">{child.pageTitle.value}</a>
                        </Link>
                        {child.children.results.map((grandChild) => {
                          if (!grandChild.pageTitle || !grandChild.url) {
                            return null;
                          }

                          return (
                            <Link href={grandChild.url.path} key={grandChild.id}>
                              <a className="dropdown-item">{grandChild.pageTitle.value}</a>
                            </Link>
                          );
                        })}
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link href={child.url.path}>
                        <a className="nav-link">{child.pageTitle.value}</a>
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ) : null;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
