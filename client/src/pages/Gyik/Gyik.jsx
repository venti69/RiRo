import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../css/Info.css';

const Info = () => {
  const hospitalPosition = [46.259277, 20.155028];

  return (
    <div className="info-container" style={{marginTop: "30px"}}>
        <div className="gyik-section">
          <h2>Üdvözöljük a Gyakran Ismételt Kérdések oldalon!</h2>
          <details>
            <summary> Hogyan tudok fizetni?</summary>
            <p>Az online fizetés még nem támogatott, kórházban lehetséges csak fizetés kézpénzzel és kártyával egyaránt.</p>
          </details>
          <details>
            <summary> Hogyan tudok időpontot foglalni?</summary>
            <p>Időpontot foglalhat online a weboldalon keresztül, telefonon vagy személyesen a recepción.</p>
            <button><Link to='/orvosok'>Időpont foglalás</Link></button>
          </details>

          <details>
            <summary> Mikor van nyitva a kórház?</summary>
            <p>A sürgősségi osztály 0-24 órában elérhető, a szakrendelések időpontjai pedig a weboldalon találhatók.</p>
          </details>

          <details>
            <summary> Szükséges előzetes bejelentkezés a szakrendelésekre?</summary>
            <p>Igen, a legtöbb szakrendelésre előzetes bejelentkezés szükséges. Időpontfoglalás lehetséges online vagy telefonon.</p>
          </details>

          <details>
            <summary> Hogyan kérhetek orvosi igazolást vagy leletet?</summary>
            <p>Orvosi igazolásokat és leleteket a kezelőorvos vagy a betegfelvételi iroda állít ki. Kérjük, vegye fel velük a kapcsolatot.</p>
          </details>

          <details>
            <summary> Van lehetőség online konzultációra?</summary>
            <p>Igen, egyes szakterületeken elérhető online konzultáció. Erről bővebb információt a weboldalon talál.</p>
          </details>

          <details>
            <summary> Milyen biztosításokat fogad el a kórház?</summary>
            <p>A kórház az OEP által finanszírozott kezeléseket és több magán egészségbiztosítást is elfogad. Részletes információk a recepción kérhetők.</p>
          </details>

          <details>
            <summary> Mit kell hoznom a kórházi felvételhez?</summary>
            <p>A személyi igazolvány, TAJ-kártya, lakcím kártya és a beutaló szükséges. További dokumentumok az adott ellátástól függően lehetnek szükségesek.</p>
          </details>

          <details>
            <summary> Hol található a legközelebbi parkoló?</summary>
            <p>A kórház saját parkolóval rendelkezik, de a környéken több nyilvános parkolóhely is található.</p>
          </details>

          <details>
            <summary> Látogatási idő és szabályok?</summary>
            <p>A látogatási idő hétköznap 14:00-18:00, hétvégén 10:00-14:00 között van. Kérjük, hogy a betegek érdekében tartsák be a látogatási rendet.</p>
          </details>
        </div>
    </div>
  );
};

export default Info;
