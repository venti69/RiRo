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
        <ul>
          <li>✅ <strong>Gyors és egyszerű időpontfoglalás</strong></li>
          <li>✅ <strong>Átlátható szolgáltatások</strong></li>
          <li>✅ <strong>Digitális egészségügy</strong></li>
          <li>✅ <strong>Időhatékonyság</strong></li>
          <li>✅ <strong>Biztonságos és megbízható</strong></li>
        </ul>

        <h3>🌍 Hogyan használhatja?</h3>
        <p>
          <Link to="/fooldal"><strong>Főoldalunkon</strong></Link> körbe tudsz nézni.
        </p>

        <h2>👨‍💻 Weboldal készítői:</h2>
        <div className="team-section">
          <div className="team-member">
            <h4>🎨 Dizájn: Demeter Richárd</h4>
            <p>„A kinézet nem csak a szemnek fontos, hanem a használhatóságnak is.”</p>
          </div>
          <div className="team-member">
            <h4>💻 Programozás: Nagyváti Rómeó</h4>
            <p>„Ricsi szeret néha túlozni. Leginkább én csináltam a projekt minden részét, egy két elemben segített Ricsi, amikor kiosztottam neki egy feladatot(de azt is nehezen csiálta meg), de ez most lényegtelen. Én feleltek a programok sikeres működéséért, ha valami nem működik akkor elég sokat dolgozok rajta, hogy működjön és a további módosítások ne zavarjanak be. Adatbázisért is én vagyok a felelős, mível én tudom jól kezelni. Ricsi csak egy segédmunkás! 😆”</p>
          </div>
          <div className="team-member">
            <h4>📌 Segédkezett: Bodrogi Péter Róbert</h4>
            <p>„Tanárként az a dolgom, hogy segítsek, ha elakadnak.”</p>
          </div>
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

      {/* Kapcsolat szekció */}
      <div className="contact-section">
        <h2>📞 Kapcsolat</h2>
        <p>📍 Cím: 6721 Szeged, Osztrovszky utca 5.</p>
        <p>☎️ Telefon: <strong> +36 30 455 455</strong></p>
        <p>📧 Email: <strong style={{color: "#007CFF"}}><a href="mailto:RiRokorhaz@gmail.com">RiRokorhaz@gmail.com</a></strong> </p>
      </div>

      <footer className="footer">
        © A képeket: "<b>https://u-szeged.hu/...rangsorain.jpg</b>" és "<b>https://investinszeged.hu/...rendezveny.jpg</b>" kölcsönöztük
      </footer>
    </div>
  );
};

export default Info;
