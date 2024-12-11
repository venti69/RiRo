import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Idopont = () => {
  return (
    <div className="info-container"><br />
        <div className='text-section'>
            <h1>Orvosok</h1>
        </div>
    </div>
  );
};

export default Idopont;
