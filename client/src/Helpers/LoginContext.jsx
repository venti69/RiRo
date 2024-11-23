import { createContext } from 'react';

const BelepContext = createContext();

function Belep(props) {
    const setIsLogged = (ertek) => {
        localStorage.setItem('isLoggedIn', JSON.stringify(ertek));
    };

    const setIsAdmin = (ertek) => {
        localStorage.setItem('isAdmin', JSON.stringify(ertek));
    };

    const getIsLogged = () => {
        return JSON.parse(localStorage.getItem('isLoggedIn'));
    };

    const getIsAdmin = () => {
        return JSON.parse(localStorage.getItem('isAdmin'));
    };

    return (
        <BelepContext.Provider
            value={{ setIsLogged, getIsLogged, setIsAdmin, getIsAdmin }}
        >
            {props.children}
        </BelepContext.Provider>
    );
}

export { Belep };
export default BelepContext;
