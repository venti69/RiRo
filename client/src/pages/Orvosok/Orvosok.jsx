import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../css/images.css';
import '../../css/Orvosok.css';
import '../../css/Modal.css';
import Datetime from 'react-datetime';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-datetime/css/react-datetime.css";

const successNotify = () => toast.success("Sikeres jelentkezés!");
const errorNotify = (message) => toast.error(message || "Sikertelen jelentkezés!");
const Orvosok = () => { 
  const [orvosok, setOrvosok] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  // const kepek = [ "/src/assets/images/Romeo.jpg", "/src/assets/images/Ricsi.jpg",  "/src/assets/images/Bodrogi.jpg" ]
  const datetimeRef = useRef(null);

  useEffect(() => {
    const dolgoz = async () => {
      const response = await fetch('http://localhost:3001/doctorsfrontend');
      const valasz = await response.json();
      if (response.ok) {
        setOrvosok(valasz.doctors);
      }
    };

    dolgoz();
  }, []);

  // Modal megnyitása adott orvossal
  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible(true);
  };

  // Modal bezárása
  const closeModal = () => {
    setSelectedDoctor(null);
    setModalVisible(false);
  };
  const jelentkezes = () => {
    if (!selectedDoctor || !datetimeRef.current?.state.selectedDate) {
      console.error("Hiányzó adatok: orvos vagy időpont");
      errorNotify();
      
      return;
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = localStorage.getItem('userId');
    console.log(user);
  
    fetch('http://localhost:3001/kezeles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nev: user.name,
        orvosId: selectedDoctor._id,
        paciensId: userId,
        idopont: datetimeRef.current.state.selectedDate,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Hiba történt a szerver válaszában!');
        
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
      errorNotify('Sikertelen jelentkezés: ' + err.message);
    });
    
    setSelectedDoctor(null);
    setModalVisible(false);
  };
  

  return (
    <div className="info-container">
      <div className="text-section">
        <h1 className='h1Orvosok'>Orvosok</h1>
      </div>
      <div className="doctors-list">
        {orvosok.map((doctor, index) => (
          <div key={doctor.id || index} className="doctor-card">
            <div className="doctor-card-header">
             <p className="doctor-image"><img src={doctor.orvoskep} alt="Orvos kép" style={{borderRadius: "50%", height:"110px", width:"100px"}} /></p> 
              <h3>{doctor.nev}</h3>
            </div>
            <div className="doctor-card-body">
              <p><strong>Szakma: </strong> {doctor.szak} </p>
              <button onClick={() => openModal(doctor)}>Részletek</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            {selectedDoctor && (
              <div className="modal-body">
                <h2>{selectedDoctor.nev}</h2>
                {/* <p><strong></strong> {selectedDoctor.orvoskep}</p> */}
                <div className="modal-kep" style={{ height:"220px", width:"200px", margin:"auto" }}>
                <img src={selectedDoctor.orvoskep} style={{borderRadius: "50%", height:"100%", width:"100%", objectFit:"cover", objectPosition: "0px 0px"}}></img>
                </div>
                <p><strong>Email:</strong> {selectedDoctor.email}</p>
                <p><strong>Telefonszám:</strong> {selectedDoctor.telszam}</p>
                <p><strong>Neme:</strong> {selectedDoctor.neme}</p>
                <p><strong>Kor:</strong> {selectedDoctor.kor}</p>
                {/* <p><strong>Rendelés:</strong> <br />{selectedDoctor.rendeles[0]}</p>
                <p>{selectedDoctor.rendeles[1]}</p> */}
                <div>
                  <Datetime ref={datetimeRef} />
                </div>
              </div>
              
            )}
            <button onClick={jelentkezes}>Jelentkezés</button>
          </div>
        </div>
      )}      
    </div>
  );
};

export default Orvosok;
