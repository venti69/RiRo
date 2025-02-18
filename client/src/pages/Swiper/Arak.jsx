import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const promotions = [
  {
    title: "Röntgen Vizsgálatok",
    description: "Röntgenfelvétel testtájanként - 1 irány",
    location: "TritonLife Medical Center XIII. kerület",
    price: "7 990 Ft",
  },
  {
    title: "Várandósgondozás",
    description: "Babamozi",
    location: "TritonLife Medical Center Hegyalja",
    price: "27 990 Ft",
  },
  {
    title: "Ultrahang-diagnosztika",
    description: "Emlők és axillák ultrahang vizsgálata",
    location: "TritonLife Medical Center Genium",
    price: "27 990 Ft",
  },
  {
    title: "Ultrahang-diagnosztika",
    description: "Hasi- és kismedencei ultrahang",
    location: "TritonLife Medical Center Genium",
    price: "27 990 Ft",
  },
  {
    title: "CT Vizsgálat",
    description: "Agykoponya CT natív",
    location: "TritonLife Medical Center XIII. kerület",
    price: "32 500 Ft",
  },
  {
    title: "MR Vizsgálat",
    description: "Térd MR kontrasztanyag nélkül",
    location: "TritonLife Medical Center Hegyalja",
    price: "45 900 Ft",
  },
  {
    title: "Laborvizsgálat",
    description: "Teljes vérkép + vizeletvizsgálat",
    location: "TritonLife Medical Center Genium",
    price: "12 500 Ft",
  },
  {
    title: "Szemészet",
    description: "Komplett szemészeti szűrővizsgálat",
    location: "TritonLife Medical Center XIII. kerület",
    price: "18 000 Ft",
  },
  {
    title: "Kardiológiai Vizsgálat",
    description: "Terheléses EKG",
    location: "TritonLife Medical Center Hegyalja",
    price: "35 000 Ft",
  },
  {
    title: "Neurológiai Vizsgálat",
    description: "Teljes neurológiai konzultáció",
    location: "TritonLife Medical Center Genium",
    price: "28 000 Ft",
  },
  {
    title: "Bőrgyógyászat",
    description: "Anyajegy szűrés és bőrrák szűrés",
    location: "TritonLife Medical Center XIII. kerület",
    price: "15 900 Ft",
  },
  {
    title: "Gasztroenterológia",
    description: "Gyomortükrözés altatásban",
    location: "TritonLife Medical Center Hegyalja",
    price: "85 000 Ft",
  }
];

const PromotionSlider = () => {
  return (
    <div className="promo-container"><br />
      <h2>Aktuális kedvezményeink!</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="promo-slider"
      >
        {promotions.map((promo, index) => (
          <SwiperSlide key={index} className="promo-card">
            <h3>{promo.title}</h3>
            <p><strong>{promo.description}</strong></p>
            <p>{promo.location}</p>
            <p className="price">{promo.price}</p>
            <div className="buttons">
              { <button className="book-btn">
               Kezelő orvos
              </button> }
              <button className="details-btn">
                Részletek <AiOutlineArrowRight />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromotionSlider;

// CSS a Swiperhez.
const styles = `
.promo-container {
  text-align: center;
  padding: 40px;
  /* background: rgba(255, 255, 255, 0.1); */
  /* backdrop-filter: blur(10px); */
  border-radius: 15px;
}
.promo-slider .swiper-pagination {
    position: relative; /* Az alaphelyzethez képest mozgatjuk */
    margin-top: 20px; /* Ezzel lejjebb tolod */
}
.promo-slider {
  padding: 20px 0;
}

.promo-card {
  background: white;
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease-in-out;
}

.promo-card:hover {
  transform: translateY(-5px);
}

.price {
  font-size: 1.4em;
  font-weight: bold;
  color: #00c896;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.book-btn, .details-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.book-btn {
  background: linear-gradient(135deg, #4caf50, #00c896);
  color: white;
}

.details-btn {
  background: linear-gradient(135deg, #007bff, #00a2ff);
  color: white;
}

.book-btn:hover, .details-btn:hover {
  opacity: 0.8;
}

.book-btn svg, .details-btn svg {
  margin-right: 8px;
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);