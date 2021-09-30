type CardImage = {
    src: string;
    alt?: string;
}

type CardProps = {
    title: string;
    description?: string;
    image?: CardImage;
}

export const Card: React.FC<CardProps> = ({title, description, image }) => {
    return (
        <div className="c-card">
            <h2>{title}</h2>
            {description && 
                <p>
                    {description}
                </p>
            }
            {image && 
                <img {...image} />
            }
        </div>
    )
}