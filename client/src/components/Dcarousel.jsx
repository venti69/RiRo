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
                description: "A link átdobja magát a Szeged SZTE Hírek oldalra, ahol friss egészségügyi híreket olvashat.",
                image: "https://www.vitalea.hu/img/Stock/2-es_tipusu_diabetes_mellitus.webp",
                // link: "https://htmedicalcenter.hu/wp-content/uploads/2023/08/medicalpoint-mri-budapest-1024x683.jpg"
            },
            [// {
            //     // title: "Szeged friss hírei",
            //     // description: "Szeged Friss híreit olvashatja, ha a linkre tovább megy. (Szeged365)",
            //     // image: kep2,
            //     // link: "https://szeged365.hu/"   
            // }, 
            ]
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
        // autoplaySpeed: 9000,
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
                        <a href={item.link} className="btn" target="_blank">Tovább</a>
                    </div>

                    
                    
                </div>
            ))}
        </Slider>
        {/* <img src={kep} alt="" /> */}
        </>
    );
};

export default NewsCarousel;
