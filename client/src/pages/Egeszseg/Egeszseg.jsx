import React from 'react';
import NewsCarousel from '../../components/Ecarousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import '../../css/Egeszseg.css';
import vmero from '../../assets/images/vmero.png';
import errendszer from '../../assets/images/errendszer.png';
import vercsepp from '../../assets/images/vercsepp.png';
import fertozes from '../../assets/images/fertozes.png';



const Fooldal = () => {
    window.onload = function () {
        // Ellenőrizzük, hogy az oldal már újratöltődött-e ebben a munkamenetben
        if (!sessionStorage.getItem('hasReloaded')) {
            sessionStorage.setItem('hasReloaded', 'true'); // Beállítjuk, hogy újratöltött
            window.location.reload(); // Oldal újratöltése
        }
    };
        const slides = [
        "https://via.placeholder.com/1200x500/FF5733/ffffff?text=Slide+1"
    ];
    return (
        <div style={{ overflowX: 'hidden', minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <br /><br />
            <h1 className='vh1'>Digitális Egészségügy</h1>
            <NewsCarousel />
            <div className="article_txt">
                <div className="article_txt_baleg">

                
    <div className='szovodmenyek' style={{ textAlign: "start", marginBottom: "30px", lineHeight: "30.4px", color: "#6666666", fontSize: "25px", display: "grid", gridTemplateColumns: "22% 70%", paddingTop: "20px", paddingLeft: "20px"}}>
        <div className="szovodmenyekBal">
        {/* <img src={vmero} alt="vércukormérő" /> */}
        </div>
        <div className="szovodmenyekJobb" style={{display: 'flex', alignItems: 'center', color: '#7ba8c9'}}>
        A digitális egészségügy <br />  szerepe
        </div>
    </div>

    <div style={{ color: '#7ba8c9', fontSize: "20px", paddingTop: "20px", paddingLeft: "10px", }}>
        <p className='szoveg' style={{color: '#7ba8c9'}}>A modern technológia forradalmasítja az orvosi diagnosztikát, kezelést és betegellátást. Az adatalapú döntéshozatal és az innovatív eszközök hatékonyabbá teszik az egészségügyi rendszereket.</p>
    </div>

    <div className="errendszer">
    <div className="errendszer-keppel">
    {/* <img className='errendszers' src={errendszer} alt="érrendszer"/> */}
    <p className='szovegerrendszer' style={{color: '#7ba8c9'}}>Intelligens rendszerek: a mesterséges intelligencia és a gépi tanulás segíti az orvosokat a pontosabb diagnózis felállításában, a betegségek korai felismerésében és a személyre szabott terápiák kidolgozásában.</p>
    </div>

        
    <div className="errendszer-keppel">
    {/* <img className='vercsepp' src={vercsepp} alt="érrendszer" /> */}
    <p className='szovegerrendszer' style={{color: '#7ba8c9'}}>Távorvoslás és monitorozás: a digitális eszközök lehetővé teszik a folyamatos betegfelügyeletet, akár otthoni környezetben is, csökkentve a kórházi terheltséget és javítva a páciensek életminőségét.</p>
    </div>
    </div>  



    </div>
                <div className="article_txt_jobbeg"></div>
    <table style={{ width: "80%" }} cellSpacing="0" cellPadding="0">
        <tbody>
            <tr style={{ width: "50%" }}>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.2725613817242!2d20.144926615487925!3d46.24480908903745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474489942a0a50f7%3A0x9956e4bf3c32b3dc!2sDepartment%20of%20Radiology%2C%20University%20of%20Szeged!5e0!3m2!1sen!2shu!4v1576948020182!5m2!1sen!2shu"
                        width="400"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Radiológiai Klinika"
                    /> */}
            </tr>
        </tbody>
    </table>
</div>

        </div>
    );
};

export default Fooldal;
