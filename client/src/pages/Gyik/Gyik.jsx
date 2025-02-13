import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Info = () => {
  const hospitalPosition = [46.259277, 20.155028];

  return (
    <div className="info-container">
        <div className="gyik-section">
          <h2>❓ Kérdései vannak? Előtte látogassa meg a Gyakori Kérdések oldalt, hogy megtalálja a válaszát!</h2>
          <details>
            <summary>🔹Gyakori kérdések.</summary>
            {/* <p>Időpontot foglalhat online a weboldalon keresztül, telefonon vagy személyesen a recepción.</p> */}
          </details>
          <details>
            <summary>🔹 Mikor van nyitva a kórház?</summary>
            <p>A sürgősségi osztály 0-24 órában elérhető, a szakrendelések időpontjai pedig a weboldalon találhatók.</p>
          </details>
        </div>
    </div>
  );
};

export default Info;
