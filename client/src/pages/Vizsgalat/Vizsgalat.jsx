import React from 'react';
import NewsCarousel from '../../components/Vcarousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import '../../css/Vizsgalatok.css';
import Romeo from '../../assets/images/Romeo.jpg';
import Ricsi from '../../assets/images/Ricsi.jpg';
import Bodrogi from '../../assets/images/Bodrogi.jpg';
import bgi from '../Home/bg/bgi.jpg';

const Fooldal = () => {
    window.onload = function () {
        if (!sessionStorage.getItem('hasReloaded')) {
            sessionStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    };
        const slides = [
        "https://via.placeholder.com/1200x500/FF5733/ffffff?text=Slide+1"
    ];
    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <br /><br />
            <h1 className='vh1'>Diagnosztikai Vizsgálatok</h1>
            <NewsCarousel />
            <div className="V_article_txt">
                <p style={{ textAlign: "start", marginBottom: "30px", lineHeight: "30.4px", color: "#000", fontFamily: "'PT Sans', sans-serif", fontSize: "19px" }}>
                    A Szegedi Tudományegyetem Radiológiai Klinikája a Dél-Alföld legnagyobb képalkotó vizsgálatokat végző betegellátó, oktató, kutató egysége. Az orvostanhallgatók oktatásában két féléven keresztül heti előadásokkal és gyakorlatokkal végzi a képzést. A Klinika a saját kutatási projectjei mellett részt vesz az Egyetem klinikáinak és tanszékeinek kutatásában és kiterjedt hazai és nemzetközi kapcsolatokkal rendelkezik. A betegellátást Magyarország legmodernebb gépparkjával biztosítja.
                </p>
                <h6 style={{ color: "rgb(243, 30, 0)", fontFamily: "'PT Sans', sans-serif", fontSize: "14px" }}>
                    <strong>Vizsgálatokra időpontot a 06-62-545-400 telefonszámon lehet kérni munkaidőben!</strong>
                </h6>
                <p style={{ textAlign: "left", color: "rgb(243, 30, 0)", fontFamily: "'PT Sans', sans-serif", fontSize: "14px" }}>
                    <strong>Heti rendszerességgel nyitunk meg újabb műszakokat.</strong> 
                    <b> Az időpontegyeztetés során a betegeink adatait akkor is elkérjük, hogyha nem tudunk időpontot biztosítani. Ilyen esetben újabb műszakok meghirdetésekor a várólistán lévő betegeket kiértesítjük.</b>
                </p>
                <p style={{ textAlign: "left" }}>
                    <b>2023 július 1-től a szentesi Dr. Bugyi István Kórházat és a deszki Mellkasi Betegségek Szakkórházát integrálta a Szegedi Tudományegyetem. Ennek eredményeként a Radiológiai Klinika feladatai is bővültek. Ennek eredményeként, a kapacitások jobb kihasználása érdekébe szegedi betegeinknek is felajánljuk esetenként a szentesi CT vizsgálat lehetőségét. A felvételek értékelését mindkét telephelyen ugyanazon orvoscsapat végzi.</b>
                </p>
                <p style={{ textAlign: "left" }}>
                    Térítéses betegellátásra időpontot +36-30-7270104 telefonszámon lehet egyeztetni.
                </p>
                <p style={{ textAlign: "left" }}>
                </p>
                <p style={{ textAlign: "left" }}>
                </p>
                <p style={{ textAlign: "left" }}>
                    Igazgató: Prof. Dr. Kincses Zsigmond Tamás PhD, habil, DSc<br />
                    6725 Szeged<br />
                    Semmelweis u. 6<br />
                    Tel.: 06-62-546-847, 06-62-546-848 (nem időpont kérés!)<br />
                    e-mail: <a href="mailto:office.radio@med.u-szeged.hu">office.radio@med.u-szeged.hu</a>
                </p>
                <p style={{ textAlign: "left" }}>
                </p>
                <table style={{ width: "80%" }} cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr style={{ width: "50%" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.2725613817242!2d20.144926615487925!3d46.24480908903745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474489942a0a50f7%3A0x9956e4bf3c32b3dc!2sDepartment%20of%20Radiology%2C%20University%20of%20Szeged!5e0!3m2!1sen!2shu!4v1576948020182!5m2!1sen!2shu"
                                    width="400"
                                    height="300"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    title="Radiológiai Klinika" />
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Fooldal;
