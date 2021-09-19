import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type HeroProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    teaser: Field<string>;
    // image: Field<image
  };
}

const Hero = (props: HeroProps): JSX.Element => (
  <div>
    <p>This is our hero component


      hallo
    </p>
    
    <h2>Heading: <Text field={props.fields.heading} /></h2>
    <h3>teaser: <Text field={props.fields.teaser} /></h3>

  </div>
);

export default Hero;
