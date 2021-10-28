import { Field, Placeholder } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";
import { Carousel as UICarousel } from "@nextjsonazure/ui-components/src/components/core/carousel/Carousel";
import React, { Fragment, useEffect, useRef, useState } from "react";
const parse = require("html-react-parser").default;

type CarouselProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Carousel = (props: CarouselProps): JSX.Element => {
  const slidesAsHtml = useRef<HTMLDivElement | null>(null);
  const [slides, setSlides] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const images = slidesAsHtml.current?.querySelectorAll("img");
    setSlides(images ? Array.from(images) : []);
  }, []);

  return (
    <>
      <div style={{ display: "none" }} ref={slidesAsHtml}>
        <Placeholder
          rendering={props.rendering}
          name="carousel-items"
          renderEach={(component, index) => <Fragment key={index}>{component}</Fragment>}
          renderEmpty={(components) => <div>{components}</div>}
        />
      </div>
      <UICarousel className="mb-4">
        {slides.map((slide, index) => (
          <Fragment key={index}>{parse(slide.outerHTML)}</Fragment>
        ))}
      </UICarousel>
    </>
  );
};

export default Carousel;
