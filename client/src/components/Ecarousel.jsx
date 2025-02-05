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
                title: "",
                // description: "A link átdobja magát a Szeged SZTE Hírek oldalra, ahol friss egészségügyi híreket olvashat.",
                image: "https://ibtconsulting.hu/sites/default/files/styles/1162/public/2023-08/Digital-Health-COVER_2.png?h=5843696e&itok=UL1IXTfi",
                // link: "https://htmedicalcenter.hu/wp-content/uploads/2023/08/medicalpoint-mri-budapest-1024x683.jpg"
            },
            { 
                  title: "",
            //     // description: "Szeged Friss híreit olvashatja, ha a linkre tovább megy. (Szeged365)",
                  image: "https://media.istockphoto.com/id/1689003176/hu/fot%C3%B3/orvosi-technol%C3%B3gia-orvos-aki-eg%C3%A9szs%C3%A9g%C3%BCgyi-ikont-tart-dns-sel-elektronikus-eg%C3%A9szs%C3%A9g%C3%BCgyi.jpg?s=612x612&w=0&k=20&c=u21Us6y4jHCvujx_LSxe4UctUR0W94_3BpSxgD5644Q=",
            //     // link: "https://szeged365.hu/"   
              
            }
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
                        {/* <a href={item.link} className="btn" target="_blank">Tovább</a> */}
                    </div>

                    
                    
                </div>
            ))}
        </Slider>
        {/* <img src={kep} alt="" /> */}
        </>
    );
};

export default NewsCarousel;
