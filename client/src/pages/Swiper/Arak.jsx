import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './swiper.css';
import "swiper/css";
import '../../css/Modal.css';
import "swiper/css/pagination";
import Datetime from 'react-datetime';
import { Pagination } from "swiper/modules";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const successNotify = () => toast.success("Sikeres jelentkezés!");
const errorNotify = (message) => toast.error(message || "Sikertelen jelentkezés!");
const PromotionSlider = () => {
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  const datetimeRef = useRef(null);
  

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

  .close-btn{
    background: linear-gradient(135deg, #007bff, #00a2ff);
    width: 50%;
    color: white;
    text-align: center;
    margin: auto; 
    border: none;
    padding: 5px;
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
  const openModal = (promo) => {
    setSelectedPromo(promo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setModalVisible(false);
  };
  const openModal2 = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible2(true);
  };
  const closeModal2 = () => {
    setSelectedDoctor(null);
    setModalVisible2(false);
    // window.location.reload();
  };
  const jelentkezes = () => {
    if (!selectedDoctor || !datetimeRef.current?.state.selectedDate) {
      errorNotify();
      return;
    }

    const selectedDate = datetimeRef.current.state.selectedDate;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      errorNotify("Nem lehet múltbeli időpontra jelentkezni!");
      return;
    }

    // Ellenőrizzük a kiválasztott napot (0 = vasárnap, 6 = szombat)
    const dayOfWeek = selectedDate.day(); // Moment.js-ben ez adja vissza a hét napját

    if (selectedDoctor.idopont.includes("H-P") && (dayOfWeek === 0 || dayOfWeek === 6)) {
      errorNotify("Ez az orvos csak hétfőtől péntekig rendel!");
      return;
    }

    if (selectedDoctor.idopont.includes("Szo-V") && (dayOfWeek >= 1 && dayOfWeek <= 5)) {
      errorNotify("Ez az orvos csak hétvégén rendel!");
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = localStorage.getItem('userId');

    fetch('http://localhost:3001/kezeles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nev: user.name,
        orvosId: selectedDoctor._id,
        paciensId: userId,
        idopont: selectedDate,
      }),
    })
    .then((response) => {
      if (!response.ok) throw new Error('Az orvos ebben az időpontban nem elérhető!');
      return response.json();
    })
    .then(() => successNotify())
    .catch((err) => errorNotify(err.message));

    closeModal2();
};
  // PROMÓCIÓK (VIZSGÁLATOK)
  const promotions = [
    {
      title: "Végbéltükrözés",
      description: "Laparatoszkópikus vizsgálat ",
      location: " Szeged, Osztrovszky utca 5",
      price: "21.000 Ft",
      szak: "Urulógus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg:"A végbéltükrözés (rectoscopia) egy diagnosztikai eljárás, amely során a végbél belső falát és a bél alsó szakaszát vizsgálják egy speciális, vékony kamerás eszközzel. A vizsgálat célja lehet aranyér, polipok, gyulladásos bélbetegségek vagy egyéb elváltozások felismerése. A vizsgálat előtt a belek tisztítása szükséges, és a beavatkozás minimális kellemetlenséggel jár. Az eredmények segítenek a pontos diagnózis felállításában és a megfelelő kezelés meghatározásában."
    },
    
    {
      title: "Röntgen Vizsgálatok",
      description: "Röntgenfelvétel testtájanként - 1 irány",
      location: "Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Gyermekorvos",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A röntgenvizsgálat egy gyors és fájdalommentes képalkotó eljárás, amelyet csonttörések, tüdőbetegségek, ízületi problémák és egyéb belső elváltozások vizsgálatára használnak. A vizsgálat során kis mennyiségű ionizáló sugárzást alkalmaznak, amely áthalad a testen, és a különböző szövetek eltérő módon nyelik el azt, így létrehozva a diagnosztikai képet. Az eljárás néhány perctől akár fél óráig is tarthat a vizsgált testrésztől függően. A modern röntgengépek alacsony sugárdózissal működnek, így a vizsgálat biztonságos, még gyermekek számára is. Az orvos a kapott képek alapján értékeli az esetleges eltéréseket, és szükség esetén további vizsgálatokat javasolhat."
    },
    

    {
      title: "Diabetológiai Vizsgálat",
      description: "Cukorbetegség Észlelése időben",
      location: "Szeged, Osztrovszky utca 5",
      price: "7 990 Ft",
      szak: "Diabetológus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A diabetológiai vizsgálat célja a cukorbetegség felismerése, kezelése és nyomon követése. Az orvos felméri a kórtörténetet, fizikális vizsgálatot végez, valamint laborvizsgálatokat rendelhet el, mint az éhomi vércukormérés, HbA1c, terheléses vércukorteszt vagy vizeletvizsgálat. A vizsgálat során a páciens személyre szabott kezelési tervet kap, amely magában foglalhat étrendi tanácsokat, gyógyszeres terápiát vagy életmódbeli változtatásokat."
    },
  
    {
      title: "Neurológiai Vizsgálat",
      description: "Komplex ideggyógyászati kivizsgálás",
      location: "Szeged, Osztrovszky utca 5",
      price: "14 990 Ft",
      szak: "Neurológus",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A neurológiai vizsgálat célja az idegrendszer állapotának felmérése, amely magában foglalja az agy, a gerincvelő, az idegek és az izmok működésének ellenőrzését. Az orvos különböző reflex-, koordinációs és érzékelési teszteket végez, valamint ellenőrzi az izomerőt és az egyensúlyt. A vizsgálat segíthet olyan betegségek diagnosztizálásában, mint a migrén, epilepszia, neuropátia vagy Parkinson-kór. Szükség esetén további képalkotó eljárások, például MRI vagy CT is javasoltak a pontosabb diagnózis érdekében."
    },
    
    {
      title: "Oszteopátiás Kezelés",
      description: "Manuálterápiás és holisztikus kezelési eljárás",
      location: "Szeged, Osztrovszky utca 5",
      price: "19 990 Ft",
      szak: "Oszteopata",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "Az oszteopátia egy manuális terápiás módszer, amely az izmok, ízületek és a test egyensúlyának helyreállítására fókuszál. A kezelés során a szakember kézzel végzi az ízületek, csontok és kötőszövetek finom manipulációját, hogy csökkentse a fájdalmat és javítsa a mozgékonyságot. Az oszteopátiás terápia segíthet hát- és derékfájdalmak, migrén, mozgásszervi problémák és egyes emésztési zavarok kezelésében. A kezelés fájdalommentes és személyre szabott, figyelembe véve a páciens egyéni szükségleteit."
    },
    {
      title: "Fül-Orr-Gégészeti Vizsgálat",
      description: "Fül, orr és gége betegségeinek diagnosztikája és kezelése",
      location: "Szeged, Osztrovszky utca 5",
      price: "13 990 Ft",
      szak: "Fül-orr gégész",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "A fül-orr-gégészeti vizsgálat célja a felső légutak és hallószervek egészségi állapotának felmérése. Az orvos endoszkópos és mikroszkópos eljárásokat alkalmazhat a középfül, orrüreg, garat és gége vizsgálatához. A vizsgálat során megállapítható a fülgyulladás, arcüreggyulladás, orrpolip, rekedtség vagy egyéb légúti panaszok oka. Szükség esetén további hallásvizsgálatok vagy allergiatesztek is elvégezhetők a pontos diagnózis érdekében."
    },
    {
      title: "Idegsebészeti Konzultáció",
      description: "Gerinc- és idegrendszeri betegségek specialistája",
      location: "Szeged, Osztrovszky utca 5",
      price: "24 990 Ft",
      szak: "Idegsebész",
      leiras: "Vizsgálat leírása: ",
      vizsgalatszoveg: "Az idegsebészeti konzultáció során a szakorvos felméri a páciens idegrendszeri problémáit, amelyek lehetnek gerincsérv, idegi fájdalmak, daganatok vagy koponyaűri nyomásfokozódás. Az orvos részletes fizikális vizsgálatot végez, és szükség esetén MRI vagy CT vizsgálatot rendelhet el. A konzultáció során megbeszélik a kezelési lehetőségeket, amelyek lehetnek konzervatív terápiák, fájdalomcsillapító eljárások vagy sebészeti beavatkozások. A cél a megfelelő kezelési terv kidolgozása a páciens életminőségének javítása érdekében."
    }
    
  ];

  

  return (
    <div className="promo-container"><br />
      <h2 style={{marginTop: "30px"}}>Vizsgálatok/Árak!</h2>
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
            <div style={{
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
                    <button className="jelentkezesBtn" style={{borderRadius: "20px", margin: "15px", color: "white", background:"#00C896", border: "none" }} onClick={() => openModal2(doctor)}>Jelentkezés</button>
                  </div>
                </div>
              ))}
            </div>
            {/* <button onClick={() => navigate('/orvosok')}>Jelentkezés</button> */}
    
    <br /> <button style={{borderRadius: "20px"}}  className="close-btn" onClick={closeModal}>Bezárás</button>
          </div>
        </div>
      )}
      {modalVisible2 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal2}>&times;</button>
            {selectedDoctor && (
              <div className="modal-body">
                <h2>{selectedDoctor.nev}</h2>
                <img className="modal-image" src={selectedDoctor.orvoskep} alt="Orvos" />
                <p><strong>Email:</strong> {selectedDoctor.email}</p>
                <p><strong>Telefonszám:</strong> {selectedDoctor.telszam}</p>
                <p><strong>Neme:</strong> {selectedDoctor.neme}</p>
                <p><strong>Kor:</strong> {selectedDoctor.kor}</p>
                <p><strong>Rendelések:</strong> <br />{selectedDoctor.idopont}</p>
                <Datetime ref={datetimeRef} />
                <button onClick={jelentkezes}>Jelentkezés</button>
              </div>
            )}
          </div>
        </div>
      )} 
      <ToastContainer />
    </div>
  );
};

export default PromotionSlider;
