import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Arak = () => {
  const hospitalPosition = [46.259277, 20.155028];

  return (
    <div className="info-container"><br />
        <h1>Árak</h1>
    </div>
  );
};

export default Arak;
