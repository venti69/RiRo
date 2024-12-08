import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Info = () => {
  // const position = [46.259271, 20.155039]; // Szeged koordinátái
  const apiKey = 'YOUR_MAPTILER_API_KEY';
  return (
    <div className="info-container"><br />
      <div className="text-section">
        <p>
          Weboldalunk célja, hogy könnyen és érintekzés nélkül tudjon időpontot kérni esetleges műtétekhez.
        </p>
        <p>
          <Link to={"/fooldal"}>Főoldalunkon</Link> körbe tud nézni, ha rögtön időpontot szeretne kérni, itt megteheti: <Link to={"/"}>Időpont kérése</Link>.
        </p>
        <div>
          <h2>Weboldal készítői:</h2>
          <h4>Dizájn része</h4>
          <ul>
            <li>Demeter Richárd</li>
          </ul>
          <h4>Program része</h4>
          <ul>
            <li>Nagyváti Rómeó</li>
          </ul>
          <h4>Segédkezett:</h4>
          <ul>
            <li>Bodrogi Péter Róbert</li>
          </ul>
        </div>
      </div>
      <div className="map-section">
      <ReactMapGL
            {...viewport}
            width="100%"
            height="500px"
            mapboxApiAccessToken="your_mapbox_token"
            onViewportChange={nextViewport => setViewport(nextViewport)}
        />
      </div>
      <footer className="footer">
        © A képeket: "<b>https://u-szeged.hu/...rangsorain.jpg</b>" és "<b>https://investinszeged.hu/...rendezveny.jpg</b>" kölcsönöztük
      </footer>
    </div>
  );
};

export default Info;

//https://docs.maptiler.com/leaflet/examples/vector-tiles-in-leaflet-js/?key=kAaGwk9PUfZVksUOb7FY&mapId=satellite ITT VAN A TÉRKÉÉÉP!!!
