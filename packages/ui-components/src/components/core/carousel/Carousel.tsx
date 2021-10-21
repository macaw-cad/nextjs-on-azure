import React, { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

enum SlideDirection {
  Prev = "prev",
  Next = "next",
}

interface CarouselProps {
  className?: string;
  noloop?: boolean;
  setSlide?: number;
}

interface NavigateSlidesProps {
  navigateSlides: (value: SlideDirection | number) => void;
}

interface CarouselControlsProps extends NavigateSlidesProps {
  activeSlide: number;
  slides: React.ReactNode;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ slides, activeSlide, navigateSlides }) => {
  return (
    <div className="carousel__controls">
      {React.Children.map(slides, (_slide, index) => (
        <button
          key={index}
          type="button"
          className={`carousel__btn${index === activeSlide ? ` is-active` : ""}`}
          onClick={() => navigateSlides(index)}
        >
          <span>{index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({ children, className, noloop, setSlide }) => {
  const [isActiveSlide, setActiveSlide] = useState(0);
  const [isPresentedSlide, setPresentedSlide] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const childrenCount = React.Children.count(children);
  
  const navigateSlides = (slideNr: SlideDirection | number) => {
    if (!carouselRef.current) {
      return;
    }

    const scrollStep = carouselRef.current.scrollWidth / childrenCount;

    let goSlide: number;
    switch (slideNr) {
      case SlideDirection.Prev:
        if (isActiveSlide < 1) {
          goSlide = !noloop ? childrenCount - 1 : isActiveSlide;
        } else {
          goSlide = isActiveSlide - 1;
        }
        break;

      case SlideDirection.Next:
        if (isActiveSlide >= childrenCount - 1) {
          goSlide = !noloop ? 0 : isActiveSlide;
        } else {
          goSlide = isActiveSlide + 1;
        }
        break;

      default:
        goSlide = typeof slideNr === "number" ? slideNr : isActiveSlide;
        break;
    }

    if (goSlide !== isActiveSlide) {
      setPresentedSlide(-1);
    }

    carouselRef.current?.scrollTo({
      top: 0,
      left: scrollStep * goSlide,
      behavior: "smooth",
    });
  };

  // class on visible slide will disappear during transit
  // handy for doing animations on active slide
  // otherwise not needed
  const debouncePresentedSlide = useRef(
    debounce((newSlide: number) => setPresentedSlide(newSlide), 100)
  ).current;

  // debounce of 15ms gives a nice animation effect for navigation pills
  const debounceActiveSlide = useRef(
    debounce((newSlide: number) => setActiveSlide(newSlide), 15)
  ).current;

  const setScrollState = () => {
    if (!carouselRef.current) {
      return;
    }

    const scrollTotal = carouselRef.current.scrollWidth;
    const scrollDelta = carouselRef.current.scrollLeft;
    const newSlide = Math.round((scrollDelta / scrollTotal) * childrenCount);
    debounceActiveSlide(newSlide);
    debouncePresentedSlide(newSlide);
  };

  const setInitialSlide = () => {
    if (setSlide && carouselRef.current) {
      carouselRef.current?.scrollTo({
        top: 0,
        left: (carouselRef.current.scrollWidth / childrenCount) * setSlide,
        behavior: "auto",
      });
    }
  };

  useEffect(() => {
    setInitialSlide();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`carousel${className ? ` ${className}` : ""}`}>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul
        role="list"
        className="carousel__slides"
        onScroll={setScrollState}
        ref={carouselRef}
      >
        {children &&
        <>
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              className={index === isPresentedSlide ? "is-active": ""}
            >
              {child}
            </li>
          ))}
          </>
        }
      </ul>
      <button
        type="button"
        className="carousel__prev"
        onClick={() => navigateSlides(SlideDirection.Prev)}
      />
      <button
        type="button"
        className="carousel__next"
        onClick={() => navigateSlides(SlideDirection.Next)}
      />
      <CarouselControls
        slides={children}
        activeSlide={isActiveSlide}
        navigateSlides={navigateSlides}
      />
    </div>
  );
};
