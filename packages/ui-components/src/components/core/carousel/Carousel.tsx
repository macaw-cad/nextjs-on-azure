import { useEffect } from "react"

type CarouselItem = {
    image: {
        src: string;
        alt?: string;
    }
}

type CarouselProps = {
    carouselItems: CarouselItem[]; 
}

export const Carousel: React.FC<CarouselProps> = ({carouselItems}) => {
    useEffect(() => {
        const firstItem = document.querySelector(".carousel-item:first-child");
        firstItem?.classList.add("active");
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {carouselItems.map((item, index) => 
                    <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>    
                )}
            </ol>
            
            <div className="carousel-inner">
                {carouselItems.map((item, index) => 
                    <div className="carousel-item" key={index}>
                        <img className="d-block w-100" src={item.image.src} alt={item.image.alt} />
                    </div>
                )}
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