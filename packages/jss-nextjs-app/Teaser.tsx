type TeaserImage = {
    src: string;
    alt?: string;
}

type TeaserProps = {
    title: string;
    description?: string;
    image?: TeaserImage;
}

export const Teaser: React.FC<TeaserProps> = ({title, description, image }) => {
    return (
        <div className="c-teaser">
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