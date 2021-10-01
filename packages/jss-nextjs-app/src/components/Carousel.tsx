import { Field, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import React, { useEffect } from 'react';

type CarouselProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Carousel = (props: CarouselProps): JSX.Element => {
  useEffect(() => {
    const firstItem = document.querySelector(".carousel-item:first-child");
    firstItem?.classList.add("active");
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-3" data-ride="carousel">
      <div className="carousel-inner">
        <Placeholder
          rendering={props.rendering}
          name="carousel-items"
          renderEach={(component, index) => (
            <div className="carousel-item" key={index}>
              {component}
            </div>
          )}
          renderEmpty={(components) => <div>{components}</div>}
        />
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
  )
}

export default Carousel;
