import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';

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
      <nav className="my-2 my-md-0 mr-md-3">
        {fields.data.item.children.results.map((child, i) => {
          return child.pageTitle && child.url?.path ? (
            <li key={i}>
              <Link href={child.url.path}>
                <a className="p-2 text-dark">{child.pageTitle.value}</a>
              </Link>

              {child.children.results.length > 0 && (
                <ul>
                  {child.children.results.map((grandChild, index) => {
                    if (!grandChild.pageTitle || !grandChild.url) {
                      return null;
                    }

                    return (
                      <li key={index}>
                        <Link href={grandChild.url.path}>
                          <a className="p-2 text-dark">{grandChild.pageTitle.value}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ) : null;
        })}
      </nav>
    </div>
  );
};

export default Navigation;
