import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type BannerProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    teaser: Field<string>;
  };
}

const Banner = (props: BannerProps): JSX.Element => (
  <div>
    <p>Banner Component</p>

    <h2>Heading: <Text field={props.fields.heading} /></h2>

    <h3>teaser: <Text field={props.fields.teaser} /></h3>
    
  </div>
);

export default Banner;
