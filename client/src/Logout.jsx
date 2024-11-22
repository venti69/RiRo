import React, { useContext } from 'react';
import { LoginContext } from './Helpers/Context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    let navigate = useNavigate();
    // const { admin, setAdmin } = useContext(LoginContext);
    // const { loggedIn, setLoggedIn } = useContext(LoginContext);

    const loggedIn = localStorage.getItem('isLoggedIn');
    
    if (loggedIn === true) {
        localStorage.setItem('isLoggedIn', false);
        localStorage.setItem('isAdmin', false);
        navigate('/');
    }
    return <div></div>;
};

export default Logout;
