type CardImage = {
    src: string;
    alt?: string;
}

type CardProps = {
    title: string;
    description?: string;
    image?: CardImage;
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="card" >
            {image && 
                <img className="card-img-top" {...image} />
            }
            <div className ="card-body">
                <h5 className ="card-title">{title}</h5>
                <p className ="card-text">{description}</p>
            </div>
        </div>
    )
}