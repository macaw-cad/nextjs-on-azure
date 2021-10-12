import React from "react"

type CardProps = {
    title: JSX.Element;
    description?: JSX.Element;
    image?: JSX.Element
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="card h-100">
            {image &&
                <>{React.cloneElement(image, { className: "card-img-top h-auto" })}</> 
            }
            <div className ="card-body">
                <h5 className="card-title">{title}</h5>
                {description && 
                    <p className="card-text">{description}</p>
                }
            </div>
        </div>
    )
}