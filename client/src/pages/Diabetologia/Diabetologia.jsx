import React from 'react';
import NewsCarousel from '../../components/Dcarousel';
import { Link } from 'react-router-dom';
import '../../css/images.css';
import '../../css/Diabetologia.css';
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
            <h1 className='vh1'>Diabetológia Konzultáció</h1>
            <NewsCarousel />
            <div className="article_txt">
                <div className="article_txt_bal">

                
    <div className='szovodmenyek' style={{ textAlign: "start", marginBottom: "30px", lineHeight: "30.4px", color: "#6666666", fontSize: "25px", display: "grid", gridTemplateColumns: "22% 70%", paddingTop: "20px", paddingLeft: "20px"}}>
        <div className="szovodmenyekBal">
        <img src={vmero} alt="vércukormérő" />
        </div>
        <div className="szovodmenyekJobb" style={{display: 'flex', alignItems: 'center'}}>
         Cukorbetegség lehetséges <br /> szövődményei
        </div>
    </div>

    <div style={{ color: "#6666666", fontSize: "20px", paddingTop: "20px", paddingLeft: "10px", }}>
        <p className='szoveg'>A cukorbetegség nem gyógyítható, viszont megfelelő diétával, <br /> testmozgással, gyógyszeres kezeléssel szinten tartható.</p>
    </div>

    <div className="errendszer">
    <div className="errendszer-keppel">
    <img className='errendszers' src={errendszer} alt="érrendszer"/>
    <p className='szovegerrendszer'>Kis ereket érintő szemészeti, vese,<br /> idegrendszer szövődmények: <br /> látásromlás, idegi fájdalmak, <br /> zsibbadások</p>
    </div>

        
    <div className="errendszer-keppel">
    <img className='vercsepp' src={vercsepp} alt="érrendszer" />
    <p className='szovegerrendszer'>Nagy ereket érintő <br /> szövődmények: szívinfarktus, <br /> agyvérzés, agyi infarktus, alsó <br /> végtagi szűkület, merevedési <br /> zavarok</p>
    </div>

    <div className="errendszer-keppel">
    <img className='fertozes' src={fertozes} alt="érrendszer" />
    <p className='szovegerrendszer'>Gyakoribb fertőzések: gombás <br /> fertőzések, baktérium okozta <br /> fertőzések</p>
    </div>
    </div>  



    </div>
                <div className="article_txt_jobb"></div>
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
