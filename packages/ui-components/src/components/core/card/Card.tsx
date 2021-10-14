import React from "react"

type CardProps = {
  title: JSX.Element;
  description?: JSX.Element;
  image?: JSX.Element;
  callToAction?: {
    text: string;
    url: string;
  };
  classname?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image, callToAction, classname }) => {
  return (
    <div className={`card ${classname ? classname : ''}`}>
      {image &&
          <>{React.cloneElement(image, { className: "card__img" })}</>
      }
      <div className="card__body">
        <h5 className="card__title">{title}</h5>
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
