import { Text, Field, Image, ImageField } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";
import { Card } from "@nextjsonazure/ui-components/src/components/core/card/Card";

type TeaserProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    image: ImageField;
  };
};

const Teaser: React.FC<TeaserProps> = ({ fields }): JSX.Element => (
  <Card
    title={<Text field={fields.heading} />}
    description={<Text field={fields.description} />}
    image={<Image field={fields.image} />}
  />
);

export default Teaser;
