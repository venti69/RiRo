import React from 'react';
import { Link } from 'react-router-dom';

const Fooldal = () => {
    const loggedIn = localStorage.getItem('isLoggedIn');


    return (
        <div>
            <h1>Üdvözlünk a RiRó Korházunk főoldalán</h1>
            <h6>További információért kattints az alábbi <Link to={"/info"}>linkre</Link> </h6>
        </div>
    );
};

export default Fooldal;
