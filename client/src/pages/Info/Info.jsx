import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Info = () => {
  const hospitalPosition = [46.259277, 20.155028];

  return (
    <div className="info-container">
      <br />
      <div className="text-section">
        <h2>Miért érdemes használni a RiRo Kórház weboldalát?</h2>
        <p>
          A <strong>RiRo Kórház weboldala</strong> egy modern és felhasználóbarát platform, amelynek célja, hogy a páciensek gyorsan és egyszerűen hozzáférjenek az egészségügyi szolgáltatásokhoz. 
        </p>

        <h3>🔹 Előnyök és funkciók:</h3>
        <ul style={{listStyleType: "none"}}>
          <li>✔  <strong>Gyors és egyszerű időpontfoglalás</strong></li>
          <li>✔  <strong>Átlátható szolgáltatások</strong></li>
          <li>✔  <strong>Digitális egészségügy</strong></li>
          <li>✔  <strong>Időhatékonyság</strong></li>
          <li>✔ <strong>Biztonságos és megbízható</strong></li>
        </ul>
      </div>

      {/* Kapcsolat és GYIK egymás mellett */}
      <div className="info-content">
        <div className="contact-section">
          <h2>📞 Kapcsolat</h2>
          <p>📍 Cím: 6721 Szeged, Osztrovszky utca 5.</p>
          <p>☎️ Telefon: <strong> +36 30 455 455</strong></p>
          <p>📧 Email: <strong style={{color: "#007CFF"}}><a href="mailto:RiRokorhaz@gmail.com">RiRokorhaz@gmail.com</a></strong> </p>
        </div>

        <div className="gyik-section">
          <h2>❓ Gyakran Ismételt Kérdések (GYIK)</h2>
          <details>
            <summary>🔹 Hogyan foglalhatok időpontot?</summary>
            <p>Időpontot foglalhat online a weboldalon keresztül, telefonon vagy személyesen a recepción.</p>
          </details>
          <details>
            <summary>🔹 Mikor van nyitva a kórház?</summary>
            <p>A sürgősségi osztály 0-24 órában elérhető, a szakrendelések időpontjai pedig a weboldalon találhatók.</p>
          </details>
        </div>
      </div>

      <div className="map-section">
        <MapContainer center={hospitalPosition} zoom={14} style={{ width: '100%', height: '300px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          />
          <Marker position={hospitalPosition}>
            <Popup><strong>Szegedi Kórház:</strong> Ide kattintva időpontot kérhet!</Popup>
          </Marker>
        </MapContainer>
      </div>
      
      <footer className="footer">
        © A képeket: "<b>https://u-szeged.hu/...rangsorain.jpg</b>" és "<b>https://investinszeged.hu/...rendezveny.jpg</b>" kölcsönöztük
      </footer>
    </div>
  );
};

export default Info;
