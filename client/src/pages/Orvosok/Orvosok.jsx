import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../css/images.css';
import '../../css/Orvosok.css';
import '../../css/Modal.css';
import Datetime from 'react-datetime';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successNotify = () => toast.success("Sikeres jelentkezés!");
const errorNotify = (message) => toast.error(message || "Sikertelen jelentkezés!");

const Orvosok = () => { 
  const [orvosok, setOrvosok] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const datetimeRef = useRef(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3001/doctorsfrontend');
        const valasz = await response.json();
        if (response.ok) {
          setOrvosok(valasz.doctors);
        }
      } catch (error) {
        console.error("Hiba történt az adatok lekérésekor", error);
      }
    };
    fetchDoctors();
  }, []);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setModalVisible(false);
  };

  const jelentkezes = () => {
    if (!selectedDoctor || !datetimeRef.current?.state.selectedDate) {
      errorNotify();
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
        idopont: datetimeRef.current.state.selectedDate,
      }),
    })
    .then((response) => {
      if (!response.ok) throw new Error('Hiba történt!');
      return response.json();
    })
    .then(() => successNotify())
    .catch((err) => errorNotify(err.message));

    closeModal();
  };

  return (
    <div className="info-container">
      <div className="text-section">
        <h1 className='h1Orvosok'>Orvosok</h1>
      </div>
      <div className="doctors-list">
        {orvosok.map((doctor, index) => (
          <div key={doctor.id || index} className="doctor-card">
            <div className="doctor-card-header" style={{backgroundImage: `url(${doctor.orvoskep})`, backgroundSize: '110% 150%', backgroundPositionY: "-10px", backgroundRepeat: "no-repeat"}}>
              <img className="doctor-image" src={doctor.orvoskep} alt="Orvos kép" />
              <h3 className='h3doktor'>{doctor.nev}</h3>
            </div>
            <div className="doctor-card-body">
              <p className='szakma'><strong>Szakma: </strong> {doctor.szak} </p>
              <button onClick={() => openModal(doctor)}>Részletek</button>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>&times;</button>
            {selectedDoctor && (
              <div className="modal-body">
                <h2>{selectedDoctor.nev}</h2>
                <img className="modal-image" src={selectedDoctor.orvoskep} alt="Orvos" />
                <p><strong>Email:</strong> {selectedDoctor.email}</p>
                <p><strong>Telefonszám:</strong> {selectedDoctor.telszam}</p>
                <p><strong>Neme:</strong> {selectedDoctor.neme}</p>
                <p><strong>Kor:</strong> {selectedDoctor.kor}</p>
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

export default Orvosok;