import React, { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

enum SlideDirection {
  Prev = "prev",
  Next = "next",
}

interface CarouselProps {
  children: React.ReactElement[];
  className?: string;
  noloop?: boolean;
  setSlide?: number;
}

interface NavigateSlidesProps {
  navigateSlides: (value: SlideDirection | number) => void;
}

interface CarouselControlsProps extends NavigateSlidesProps {
  activeSlide: number;
  slides: React.ReactElement[];
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  slides,
  activeSlide,
  navigateSlides,
}) => {
  return (
    <div className="m-carousel__controls">
      {slides.map((_slide, index) => (
        <button
          key={index}
          type="button"
          className={`m-carousel__btn${index === activeSlide ? ` is-active` : ""}`}
          onClick={() => navigateSlides(index)}
        >
          <span>{index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  noloop,
  setSlide,
}) => {
  const [isActiveSlide, setActiveSlide] = useState(0);
  const [isPresentedSlide, setPresentedSlide] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const navigateSlides = (slideNr: SlideDirection | number) => {
    if (!carouselRef.current) {
      return;
    }

    const scrollStep = carouselRef.current.scrollWidth / children.length;

    let goSlide: number;
    switch (slideNr) {
      case SlideDirection.Prev:
        if (isActiveSlide < 1) {
          goSlide = !noloop ? children.length - 1 : isActiveSlide;
        } else {
          goSlide = isActiveSlide - 1;
        }
        break;

      case SlideDirection.Next:
        if (isActiveSlide >= children.length - 1) {
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
    const newSlide = Math.round((scrollDelta / scrollTotal) * children.length);
    debounceActiveSlide(newSlide);
    debouncePresentedSlide(newSlide);
  };

  const setInitialSlide = () => {
    if (setSlide && carouselRef.current) {
      carouselRef.current?.scrollTo({
        top: 0,
        left: (carouselRef.current.scrollWidth / children.length) * setSlide,
        behavior: "auto",
      });
    }
  };

  useEffect(() => {
    setInitialSlide();
  }, []);

  return (
    <div className={`m-carousel${className ? ` ${className}` : ""}`}>
      <ul
        className="m-carousel__slides"
        onScroll={setScrollState}
        ref={carouselRef}
      >
        {children.map((child, index) => (
          <li
            key={index}
            className={index === isPresentedSlide ? "is-active": ""}
          >
            {child}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="m-carousel__prev"
        onClick={() => navigateSlides(SlideDirection.Prev)}
      >
        &lt;
      </button>
      <button
        type="button"
        className="m-carousel__next"
        onClick={() => navigateSlides(SlideDirection.Next)}
      >
        &gt;
      </button>
      <CarouselControls
        slides={children}
        activeSlide={isActiveSlide}
        navigateSlides={navigateSlides}
      />
    </div>
  );
};
