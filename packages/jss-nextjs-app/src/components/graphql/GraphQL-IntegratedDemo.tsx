// import { Text, Link } from '@sitecore-jss/sitecore-jss-nextjs';
// import NextLink from 'next/link';

interface DataSource {
  sample1: {
    jsonValue: {
      value: string;
    };
    value: string;
  };
  sample2: {
    definition: {
      type: string;
      shared: boolean;
    };
    jsonValue: {
      value: {
        href: string;
        linktype: string;
        target: string;
        text: string;
        url: string;
      };
    };
    target: string;
    text: string;
    url: string;
  };
  name: string;
  id: string;
}

interface Item {
  id: string;
  url: {
    path: string;
  };
  pageTitle: {
    value: string;
    jsonValue: {
      value: string;
    };
  };
}

interface ItemSearchResults {
  results: Item[];
}

interface GraphQlIntegratedDemoProps {
  fields: {
    data: {
      datasource: DataSource;
      contextItem: {
        id: string;
        children: ItemSearchResults;
        pageTitle: {
          value: string;
        };
      };
    };
  };
}

const GraphQLIntegratedDemo = (props: GraphQlIntegratedDemoProps): JSX.Element => {
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }

  console.error(JSON.stringify(props));

  return (
    <div data-e2e-id="graphql-integrated">
      {/* kijken we later naar */}
    </div>
  );
};

export default GraphQLIntegratedDemo;
