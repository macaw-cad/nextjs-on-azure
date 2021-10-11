import { Field, ImageField, Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CarouselItemProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    image: ImageField;
  };
};

const CarouselItem: React.FC<CarouselItemProps> = ({ fields }): JSX.Element => (
  <>
    <Image field={fields.image} className="d-block w-100 h-auto" />
    <div className="carousel-caption d-none d-md-block">
      <Text tag="h5" field={fields.heading} />
    </div>
  </>
);

export default CarouselItem;
