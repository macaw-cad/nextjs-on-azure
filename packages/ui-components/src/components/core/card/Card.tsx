import React from "react"
import { Image } from "../image/Image"

type CardProps = {
  title: JSX.Element;
  description?: JSX.Element;
  image?: string | JSX.Element;
  callToAction?: {
    text: string;
    url: string;
  };
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image, callToAction, className }) => {
  return (
    <div className={`card ${className ? className : ''}`}>
      {typeof image === "string" &&
        <Image src={image} className="card__img" />
      }
      {typeof image === "object" &&
        <>{React.cloneElement(image, { className: "card__img" })}</>
      } 
      <div className="card__body">
        <div className="card__title">{title}</div>
        {description &&
          <div className="card__text">{description}</div>
        }
        {callToAction &&
          <a href={callToAction.url} className="btn btn--primary card__cta">{callToAction.text}</a>
        }
      </div>
    </div>
  )
}
