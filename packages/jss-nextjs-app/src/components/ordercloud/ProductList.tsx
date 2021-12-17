import { Text, Field, GetStaticComponentProps, useComponentProps } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";
import { ListPageWithFacets, Me, RequiredDeep, BuyerProduct } from "ordercloud-javascript-sdk";
import React from "react";
import { Card } from "@nextjsonazure/ui-components/src/components/core/card/Card";

type ProductListProps = ComponentProps & {
  fields: {
    colorfacet: Field<string>;
  };
};

async function getProducts(colorFacet: string): Promise<RequiredDeep<ListPageWithFacets<BuyerProduct>> | null> {
  try {
    const response = await Me.ListProducts({
      filters: {
        "xp.Facets.Color": colorFacet,
      },
    });

    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
}

const ProductList: React.FC<ProductListProps> = ({ rendering, fields }): JSX.Element => {
  // first try server side, otherwise client side
  const data =
    rendering.uid && useComponentProps<RequiredDeep<ListPageWithFacets<BuyerProduct>>>(rendering.uid)
      ? useComponentProps<RequiredDeep<ListPageWithFacets<BuyerProduct>>>(rendering.uid)
      : null;

  return (
    <div>
      <p>
        Currently showing products with the following color facet configured in sitecore:{" "}
        <strong>
          <Text field={fields.colorfacet} />
        </strong>
      </p>

      {data?.Items && (
        <div className="row row--4c">
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
                  image={product.xp.Images && product.xp.Images[0] ? <img src={product.xp.Images[0].url} /> : undefined}
                  callToAction={{
                    text: "Add to cart",
                    url: "#",
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
