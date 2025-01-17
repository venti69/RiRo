import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Info = () => {
  // Szegedi kórház koordinátái
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
          <li>✅ <strong>Gyors és egyszerű időpontfoglalás</strong> – Néhány kattintással lefoglalhatod a szükséges vizsgálatokat vagy konzultációkat, anélkül hogy telefonálnod kellene vagy sorban állnál.</li>
          <li>✅ <strong>Átlátható szolgáltatások</strong> – Könnyedén megtalálhatod a számodra szükséges egészségügyi ellátást, legyen szó diagnosztikai vizsgálatokról vagy szakorvosi konzultációkról.</li>
          <li>✅ <strong>Digitális egészségügy</strong> – Online adatrögzítés lehetősége, így a kórtörténeted és a fontos egészségügyi információk mindig kéznél lesznek.</li>
          <li>✅ <strong>Időhatékonyság</strong> – Az online rendszer segít a gyors és hatékony betegellátásban, csökkentve a várakozási időt.</li>
          <li>✅ <strong>Biztonságos és megbízható</strong> – A betegadatokat bizalmasan kezeljük, és a legmodernebb biztonsági protokollokat alkalmazzuk.</li>
        </ul>

        <h3>🌍 Hogyan használhatja?</h3>
        <p>
          <Link to="/fooldal"><strong>Főoldalunkon</strong></Link> körbe tudsz nézni.
        </p>

        <h2>👨‍💻 Weboldal készítői:</h2>
        <h4>🎨 Dizájn:</h4>
        <ul>
          <li> Demeter Richárd</li>
        </ul>

        <h4>💻 Programozás:</h4>
        <ul>
          <li> Nagyváti Rómeó</li>
        </ul>

        <h4>📌 Segédkezett:</h4>
        <ul>
          <li> Bodrogi Péter Róbert</li>
        </ul>
      </div>

      <div className="map-section">
        {/* <h3>📍 Hol található a kórház?</h3> */}
        <MapContainer center={hospitalPosition} zoom={14} style={{ width: '100%', height: '500px' }}>
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
