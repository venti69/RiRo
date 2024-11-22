import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
        <p>Weboldalunk célja, hogy könnyen és érintekzés nélkül tudjon időpontot kérni esetleges műtétekhez.</p>
        <br />
        <p><Link to={"/home"}>Főoldalunkon</Link> körbe tud nézni, ha rögtön időpontot szeretne kérni itt meg teheti <Link to={"/"}>Időpont kérése</Link></p>
        <ul>
            <h2>Weboldal készítői: </h2>
            <li>Demeter Richárd</li>
            <li>Nagyváti Rómeó</li>
            <h2>Segétkezett</h2>
            <li>Bodrogi Péter Róbert</li>
        </ul>
    </div>
  )
}

export default Info