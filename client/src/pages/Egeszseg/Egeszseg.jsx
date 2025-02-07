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
            <h1 className='vh1'>Digitális Egészségügy</h1>
            <NewsCarousel />
            <div className="article_txt">
                <div className="article_txt_baleg">

                
    <div className='szovodmenyek' style={{ textAlign: "start", marginBottom: "30px", lineHeight: "30.4px", color: "#6666666", fontSize: "25px", display: "grid", gridTemplateColumns: "22% 70%", paddingTop: "20px", paddingLeft: "20px"}}>
        <div className="szovodmenyekBal">
        </div>
        <div className="szovodmenyekJobb" style={{display: 'flex', alignItems: 'center', color: '#7ba8c9'}}>
        A digitális egészségügy <br />  szerepe
        </div>
    </div>

    <div style={{ color: '#7ba8c9', fontSize: "20px", paddingTop: "20px", paddingLeft: "10px", }}>
        <p className='szoveg' style={{color: '#7ba8c9'}}>A modern technológia forradalmasítja az orvosi diagnosztikát, <br /> kezelést és betegellátást. Az adatalapú döntéshozatal és az <br /> innovatív eszközök hatékonyabbá teszik az egészségügyi <br /> rendszereket.</p>
    </div>

    <div className="errendszer">
    <div className="errendszer-keppel">
    <p className='szovegerrendszer' style={{color: '#7ba8c9'}}>Intelligens rendszerek: a mesterséges intelligencia <br /> és a gépi  tanulás segíti az <br /> orvosokat a pontosabb <br /> diagnózis felállításában, a betegségek korai felismerésében <br /> és a személyre szabott terápiák kidolgozásában.</p>
    </div>

        
    <div className="errendszer-keppel">
    <p className='szovegerrendszer' style={{color: '#7ba8c9'}}>Távorvoslás és monitorozás: a digitális eszközök lehetővé <br /> teszik a folyamatos betegfelügyeletet, akár otthoni környezetben is, <br /> csökkentve a kórházi terheltséget és javítva a páciensek életminőségét.</p>
    </div>
    </div>  



    </div>
                <div className="article_txt_jobbeg"></div>
    <table style={{ width: "80%" }} cellSpacing="0" cellPadding="0">
        <tbody>
            <tr style={{ width: "50%" }}>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    );
};

export default Fooldal;
