import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Idopont = () => { 
  const [orvosok, setOrvosok] = useState([]);
  useEffect(() => {
  const dolgoz = async () => {
    // Kérés az orvosok listájára
    const response = await fetch('http://localhost:3001/doctorsfrontend');
    const valasz = await response.json();
    console.log(valasz);
    if (!response.ok) {
      console.log(valasz);

    }
  };
  dolgoz();
  })
  return (
    <div className="info-container"><br />
        <div className='text-section'>
            <h1>Orvosok</h1>
            
        </div>
    </div>
  );
};

export default Idopont;
