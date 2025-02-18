import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../../css/Modal.css';
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { AiOutlineArrowRight } from "react-icons/ai";

const PromotionSlider = () => {
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [doctors, setDoctors] = useState([]);

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
  // ORVOSOK LEKÉRÉSE AZ API-BÓL
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3001/doctorsfrontend');
        const data = await response.json();
        if (response.ok) {
          setDoctors(data.doctors);
        }
      } catch (error) {
        console.error("Hiba az orvosok lekérésekor:", error);
      }
    };
    fetchDoctors();
  }, []);

  // PROMÓCIÓK (VIZSGÁLATOK)
  const promotions = [
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: "TritonLife Medical Center XIII. kerület",
      price: "7 990 Ft",
      szak: "Urulógus"
    },
    {
      title: "Várandósgondozás",
      description: "Babamozi",
      location: "TritonLife Medical Center Hegyalja",
      price: "27 990 Ft",
      szak: "Oszteopata"
    },
    {
      title: "Ultrahang-diagnosztika",
      description: "Emlők és axillák ultrahang vizsgálata",
      location: "TritonLife Medical Center Genium",
      price: "27 990 Ft",
      szak: "Ultrahang diagnosztika"
    }
  ];

  // MODAL MEGNYITÁSA
  const openModal = (promo) => {
    setSelectedPromo(promo);
    setModalVisible(true);
  };

  // MODAL BEZÁRÁSA
  const closeModal = () => {
    setSelectedPromo(null);
    setModalVisible(false);
  };

  return (
    <div className="promo-container"><br />
      <h2>Aktuális kedvezményeink!</h2>
      <Swiper
        slidesPerView={3}
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
              <button className="details-btn" onClick={() => openModal(promo)}>
                Részletek <AiOutlineArrowRight />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL ABLAK */}
      {modalVisible && selectedPromo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPromo.title}</h2>
            <p><strong>{selectedPromo.description}</strong></p>
            <p>{selectedPromo.location}</p>
            <p className="price">{selectedPromo.price}</p>

            {/* ORVOSOK MEGJELENÍTÉSE */}
            <h3>Elérhető kezelőorvosok:</h3>
            {doctors
              .filter((doctor) => doctor.szak === selectedPromo.szak)
              .map((doctor, index) => (
                <div key={index} className="doctor-card">
                  <img src={doctor.orvoskep} alt={doctor.nev} className="doctor-img" />
                  <div>
                    <p><strong>{doctor.nev}</strong></p>
                    <p><strong>Email:</strong> {doctor.email}</p>
                    <p><strong>Telefonszám:</strong> {doctor.telszam}</p>
                  </div>
                </div>
              ))}

            <button className="close-btn" onClick={closeModal}>Bezárás</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionSlider;
