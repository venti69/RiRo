import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/Carousel.css';
import kep from "../assets/images/szte.jpg"
import kep2 from "../assets/images/szeged.jpg"
import { useState, useEffect } from "react";

const NewsCarousel = () => {
    const [news, setNews] = useState([]); 
    
    useEffect(() => {
        setNews([
            {
                title: "SZTE hírek.",
                description: "A link átdobja magát a Szeged SZTE Hírek oldalra, ahol friss egészségügyi híreket olvashat.",
                image: kep,
                link: "https://u-szeged.hu/hirportal"
            },
            {
                title: "Szeged friss hírei",
                description: " ",
                image: kep2,
                link: "https://szeged365.hu/"
            },
            // További hírek
        ]);

    }, []); // empty dependency array means it runs only once, on mount
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
    };

    return (
        <>  
        <Slider {...settings}>
            {news.map((item, index) => (
                <div key={index} className="news-slide">
                    <img src={item.image} alt="nem megy" />
                    <div className="news-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} className="btn">Tovább</a>
                    </div>
                </div>
            ))}
        </Slider>
        {/* <img src={kep} alt="" /> */}
        </>
    );
};

export default NewsCarousel;
