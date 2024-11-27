import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
        <p>Weboldalunk célja, hogy könnyen és érintekzés nélkül tudjon időpontot kérni esetleges műtétekhez.</p>
        <br />
        <p><Link to={"/fooldal"}>Főoldalunkon</Link> körbe tud nézni, ha rögtön időpontot szeretne kérni itt meg teheti <Link to={"/"}>Időpont kérése</Link></p>
        <ul>
            <h2>Weboldal készítői: </h2><br /><ul>Dizájn</ul>
            <li>Demeter Richárd</li><br /><ul>Program</ul>
            <li>Nagyváti Rómeó</li>
            <h2>Segédkezett</h2>
            <li>Bodrogi Péter Róbert</li>
        </ul><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <footer style={{fontSize: '10px'}}>© A képeket  "<b>https://u-szeged.hu/site/upload/2024/11/kja___az_szte_ot_szakteruleten_is_a_legjobbak_kozott_a_shanghairanking_friss_rangsorain.jpg</b>" és <br /> "<b>https://investinszeged.hu/wp-content/uploads/2017/09/dom_teri_rendezveny.jpg</b>" kölcsönöztük</footer>
    </div>
  )
}

export default Info