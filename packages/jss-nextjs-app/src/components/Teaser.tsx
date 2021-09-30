import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type TeaserProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
};

const Teaser = (props: TeaserProps): JSX.Element => (
  <div>
    <p>Teaser Component</p>
    <Text field={props.fields.heading} />
    <Text field={props.fields.description} />
  </div>
);

export default Teaser;
