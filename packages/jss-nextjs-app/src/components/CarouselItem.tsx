import { Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CarouselItemProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    image: ImageField;
  };
};

const CarouselItem: React.FC<CarouselItemProps> = ({ fields }): JSX.Element => (
    <Image field={fields.image} />
);

export default CarouselItem;
