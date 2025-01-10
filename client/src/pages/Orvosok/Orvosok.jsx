import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../css/Orvosok.css';

const Idopont = () => { 
  const [orvosok, setOrvosok] = useState([]);

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
              <p><strong>Elérhetőség: </strong>{doctor.telszam} {doctor.email}</p>
              <p><strong>Neme: </strong>{doctor.neme}</p>
              <p><strong>Kor: </strong>{doctor.kor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Idopont;
