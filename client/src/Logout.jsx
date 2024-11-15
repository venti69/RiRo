import React, { useContext } from 'react';
import { LoginContext } from './Helpers/Context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    let navigate = useNavigate();
    const { admin, setAdmin } = useContext(LoginContext);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    setAdmin(false);
    setLoggedIn(false);

    if (loggedIn === false) {
        navigate('/');
    }
    return <div></div>;
};

export default Logout;
