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
                title: "Diabetológiai Konzultáció",
                image: "https://www.vitalea.hu/img/Stock/2-es_tipusu_diabetes_mellitus.webp",
            },
            {
                  title: "Diabetológiai Konzultáció",
                  image: "https://www.primamedica.hu/files/cache/1380/370/0/132.webp",
             }, 
            
        ]);

    }, []);
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>  
        <Slider {...settings} style={{margin: "100px auto", width: "50vw", borderRadius: "150px"}}>
            {news.map((item, index) => (
                <div key={index} className="news-slide">
                    <img src={item.image} alt="Kép" />
                    <div className="news-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>

                    
                    
                </div>
            ))}
        </Slider>
        </>
    );
};

export default NewsCarousel;
