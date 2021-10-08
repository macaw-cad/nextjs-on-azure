import {
  Text,
  Field,
  GetStaticComponentProps,
  useComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import {
  Configuration,
  ListPageWithFacets,
  Me,
  RequiredDeep,
  BuyerProduct,
} from 'ordercloud-javascript-sdk';
import React from 'react';

type ProductListProps = ComponentProps & {
  fields: {
    colorfacet: Field<string>;
  };
};

const ProductList: React.FC<ProductListProps> = ({ rendering, fields }): JSX.Element => {
  const data = rendering.uid
    ? useComponentProps<RequiredDeep<ListPageWithFacets<BuyerProduct>>>(rendering.uid)
    : undefined;

  return (
    <div>
      <p>
        Currently showing products with the following color facet configured in sitecore:{' '}
        <strong>
          <Text field={fields.colorfacet} />
        </strong>
      </p>

      {data?.Items && (
        <>
          {data.Items.map((product) => {
            return <div key={product.ID}>{product.Name}</div>;
          })}
        </>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  const clientId = process.env.NEXT_PUBLIC_OC_CLIENT_ID || '';
  const baseApiUrl = process.env.NEXT_PUBLIC_OC_BASE_API_URL;

  Configuration.Set({
    clientID: clientId,
    baseApiUrl: baseApiUrl,
    cookieOptions: { prefix: 'hds-nextjs', path: '/' },
  });

  try {
    const response = await Me.ListProducts({
      filters: {
        //@ts-ignore
        'xp.Facets.Color': rendering.fields?.colorfacet?.value,
      },
    });

    return response;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default ProductList;
