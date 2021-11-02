import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Details } from '@nextjsonazure/ui-components/src/components/core/details/Details';

type FaqProps = ComponentProps & {
  fields: {
    question: Field<string>;
    answer: Field<string>;
  };
};

const Faq = (props: FaqProps): JSX.Element => (
  <Details 
    summary={<Text field={props.fields.question} />}
    description={<RichText field={props.fields.answer} />}
  />
);

export default Faq;
