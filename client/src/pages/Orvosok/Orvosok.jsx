import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../css/Orvosok.css';

const Idopont = () => { 
  const [orvosok, setOrvosok] = useState([]);

  useEffect(() => {
    const dolgoz = async () => {
      // Kérés az orvosok listájára
      const response = await fetch('http://localhost:3001/doctorsfrontend');
      const valasz = await response.json();
      console.log(valasz.doctors);
      if (response.ok) {
        setOrvosok(valasz.doctors);
      }
    };

    dolgoz();
  }, []); // Az üres tömb biztosítja, hogy csak egyszer fusson le a `useEffect`

  return (
    <div className="info-container">
      <br />
      <div className="text-section">
        <h1>Orvosok</h1>
      </div>
      <div>
        <h5>Orvosok listája:</h5>
        <div className="doctors-list">
          {orvosok.map((doctor, index) => (
            <div key={doctor.id || index} className="doctor-card">
              <h3>{doctor.nev}</h3>
              <p><strong>Szakma:</strong> {doctor.szak}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Idopont;
