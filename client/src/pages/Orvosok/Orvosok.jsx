import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../css/Orvosok.css';
import '../../css/Modal.css';

const Idopont = () => { 
  const [orvosok, setOrvosok] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

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

  return (
    <div className="info-container">
      <div className="text-section">
        <h1>Orvosok</h1>
      </div>
      <div className="doctors-list">
        {orvosok.map((doctor, index) => (
          <div key={doctor.id || index} className="doctor-card">
            <div className="doctor-card-header">
              <h3>{doctor.nev}</h3>
            </div>
            <div className="doctor-card-body">
              <p><strong>Szakma: </strong> {doctor.szak}</p>
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
                <p><strong>Email:</strong> {selectedDoctor.email}</p>
                <p><strong>Telefonszám:</strong> {selectedDoctor.telszam}</p>
                <p><strong>Neme:</strong> {selectedDoctor.neme}</p>
                <p><strong>Kor:</strong> {selectedDoctor.kor}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Idopont;
