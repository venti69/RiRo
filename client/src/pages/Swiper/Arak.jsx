import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './swiper.css';
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
.modal-content{
    width: 80%;
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
      .exam-process {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    text-align: left;
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
      location: " Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Urulógus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában 5-15 percet vesz igénybe, attól függően, hogy hány felvételre van szükség és milyen testrészről van szó. A tényleges röntgenkép elkészítése csupán néhány másodpercig tart. A páciensnek el kell távolítania minden fémtárgyat (ékszerek, övek, melltartók merevítői), mert ezek zavarhatják a felvételt. Az asszisztens segít a megfelelő testhelyzetbe állni vagy feküdni, és egyes vizsgálatoknál szükség lehet arra, hogy pár másodpercig egy bizonyos pózban mozdulatlanul maradj. A röntgengép rövid ideig kis dózisú sugárzást bocsát ki, amely képet alkot a testrészedről. A felvételt a radiológus kiértékeli, és az eredményeket általában néhány órán vagy napon belül megkapja a kezelőorvos. Általában nem szükséges speciális előkészület, de egyes esetekben az orvos kérheti, hogy ne egyél vagy igyál pár órával a vizsgálat előtt (pl. gyomor- vagy bélröntgen esetén). A röntgensugárzás dózisa nagyon alacsony, így nem jelent veszélyt a páciens számára, de terhesség esetén mindenképpen jelezni kell az orvosnak!"
    },
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: " Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Gyermekorvos",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
    },
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: " Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Urulógus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
    },
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: " Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Urulógus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
    },
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: " Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Urulógus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
    },
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: " Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Urulógus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
    },
    {
      title: "Várandósgondozás",
      description: "Babamozi",
      location: " Szeged, Osztrovszky utca 5",
      price: "27 990 Ft",
      szak: "Oszteopata",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
    },
    {
      title: "Ultrahang-diagnosztika",
      description: "Emlők és axillák ultrahang vizsgálata",
      location: "Szeged, Osztrovszky utca 5",
      price: "27 990 Ft",
      szak: "Ultrahang diagnosztika",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat általában"
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
      <h2>Vizsgálatok/Árak!</h2>
      <Swiper
  slidesPerView={"auto"}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobil
    600: { slidesPerView: 2, spaceBetween: 15 }, // Kisebb tabletek
    1024: { slidesPerView: 3, spaceBetween: 20 }, // Nagyobb kijelzők
  }}
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
            <div className="exam-process" style={{color: "#007bff", fontWeight: "bold"}}> {selectedPromo.leiras}
            <p style={{color: "black"}}>{selectedPromo.vizsgalatszoveg}</p>
              
            </div>
            {/* ORVOSOK MEGJELENÍTÉSE */}
            
            <h3>Elérhető kezelőorvosok:</h3>
            <p style={{
                  display: "flex",
                  flexDirection: "row",
                  // alignItems: "center",
                  // textAlign: "center",
                  // margin: "0 auto"
                  }}>
            {doctors 
              .filter((doctor) => doctor.szak === selectedPromo.szak)
              .map((doctor, index) => (
                <div key={index} className="doctor-card" style={{
                  display: "flex",
                  flexDirection: "coloumn",
                  gap: "10px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "0 auto"
                  }}>
                  <img src={doctor.orvoskep} alt={doctor.nev} className="doctor-img" />
                  <div>
                    <p><strong>{doctor.nev}</strong></p>
                    <p><strong>Email:</strong> {doctor.email}</p>
                    <p><strong>Telefonszám:</strong> {doctor.telszam}</p>
                  </div>
                </div>
              ))}
            </p>
            <button className="close-btn" onClick={closeModal}>Bezárás</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionSlider;
