import { Text, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { renderToStaticMarkup } from 'react-dom/server';
import { ComponentProps } from 'lib/component-props';
import { Card } from '@nextjsonazure/ui-components/src/components/core/card/Card';

type TeaserProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    image: ImageField;
  };
};

const Teaser: React.FC<TeaserProps> = ({ fields }): JSX.Element => (
  <Card
    title={renderToStaticMarkup(<Text field={fields.heading} />)}
    description={renderToStaticMarkup(<Text field={fields.description} />)}
    image={
      fields.image.value?.src
        ? {
            src: fields.image.value?.src,
            alt: renderToStaticMarkup(<Text field={fields.heading} />),
          }
        : undefined
    }
  />
);

export default Teaser;
