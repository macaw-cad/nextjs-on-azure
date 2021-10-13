import React from "react"

type CardProps = {
  title: JSX.Element;
  description?: JSX.Element;
  image?: JSX.Element;
  classname?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image, classname }) => {
  return (
    <div className={`card ${classname ? classname : ''}`}>
      {image &&
          <>{React.cloneElement(image, { className: "card__img" })}</>
      }
      <div className="card__body">
        <h5 className="card__title">{title}</h5>
        {description &&
          <p className="card__text">{description}</p>
        }
      </div>
    </div>
  )
}
