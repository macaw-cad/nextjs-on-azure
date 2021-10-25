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
  Auth,
  Tokens,
  ApiRole,
} from 'ordercloud-javascript-sdk';
import React, { useEffect, useState } from 'react';
import { Card } from '@nextjsonazure/ui-components/src/components/core/card/Card';

type ProductListProps = ComponentProps & {
  fields: {
    colorfacet: Field<string>;
  };
};

async function getProducts(
  colorFacet: string
): Promise<RequiredDeep<ListPageWithFacets<BuyerProduct>> | null> {
  const clientId = process.env.NEXT_PUBLIC_OC_CLIENT_ID || '';
  const baseApiUrl = process.env.NEXT_PUBLIC_OC_BASE_API_URL;
  const scope = process.env.NEXT_PUBLIC_OC_SCOPE?.split(',');
 
  Configuration.Set({
    clientID: clientId,
    baseApiUrl: baseApiUrl,
    cookieOptions: { prefix: 'hds-nextjs', path: '/' },
  });

  // @ts-ignore
  const authResponse = await Auth.Anonymous(clientId, scope || [''] as ApiRole[]);

  Tokens.SetAccessToken(authResponse.access_token);

  try {
    const response = await Me.ListProducts({
      filters: {
        'xp.Facets.Color': colorFacet,
      },
    });

    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
}

const ProductList: React.FC<ProductListProps> = ({ rendering, fields }): JSX.Element => {
  const [orderCloudClientResponse, setOrderCloudClientResponse] = useState<RequiredDeep<
    ListPageWithFacets<BuyerProduct>
  > | null>();

  // first try server side, otherwise client side
  const data =
    rendering.uid &&
    useComponentProps<RequiredDeep<ListPageWithFacets<BuyerProduct>>>(rendering.uid)
      ? useComponentProps<RequiredDeep<ListPageWithFacets<BuyerProduct>>>(rendering.uid)
      : orderCloudClientResponse;

  async function setProducts() {
    const response = await getProducts(fields.colorfacet.value);
    setOrderCloudClientResponse(response);
  }

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <div>
      <p>
        Currently showing products with the following color facet configured in sitecore:{' '}
        <strong>
          <Text field={fields.colorfacet} />
        </strong>
      </p>

      {data?.Items && (
         <div className="row" style={{
          // temp fix for now to get a nice repeating grid
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(4, minmax(10px, 1fr))"
        }}>
          {data.Items.map((product) => {
            return (
              <div className="column" key={product.ID}>
                <Card
                  title={<>{product.Name}</>}
                  description={
                    <>
                      {product.xp.Price} {product.xp.PriceCurrency}
                    </>
                  }
                  image={
                    product.xp.Images && product.xp.Images[0] ? (
                      <img src={product.xp.Images[0].url} />
                    ) : undefined
                  }
                  callToAction={{
                    text: "Add to card",
                    url: "#"
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  // @ts-ignore
  const response = await getProducts(rendering.fields.colorfacet.value);

  return response;
};

export default ProductList;
