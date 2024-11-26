import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/Carousel.css';
import kep from "../image/asd.jpg"

const NewsCarousel = () => {
    const news = [
        {
            title: "Új CT berendezés érkezett a kórházba",
            description: "Mostantól még gyorsabb diagnosztika érhető el.",
            image: "/path-to-image1.jpg",
            link: "/news/1"
        },
        {
            title: "Influenza szezon kezdete",
            description: "Védőoltás mostantól elérhető a rendelőkben.",
            image: "/path-to-image2.jpg",
            link: "/news/2"
        },
        // További hírek
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Slider {...settings}>
            {news.map((item, index) => (
                <div key={index} className="news-slide">
                    <img src={kep} alt="nem megy" />
                    <div className="news-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} className="btn">Tovább</a>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default NewsCarousel;
