import { createContext } from 'react';

const BelepContext = createContext();

function Belep(props) {
    // Alapértelmezett értékek beállítása, ha szükséges
    if (!localStorage.getItem('isLoggedIn')) {
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
    }
    if (!localStorage.getItem('isAdmin')) {
        localStorage.setItem('isAdmin', JSON.stringify(false));
    }

    // Funkció a bejelentkezett állapot mentéséhez
    const setIsLogged = (ertek) => {
        localStorage.setItem('isLoggedIn', JSON.stringify(ertek));
    };

    // Funkció az admin állapot mentéséhez
    const setIsAdmin = (ertek) => {
        localStorage.setItem('isAdmin', JSON.stringify(ertek));
    };

    // Funkció a bejelentkezett állapot lekérdezéséhez
    const getIsLogged = () => {
        try {
            const value = localStorage.getItem('isLoggedIn');
            return value ? JSON.parse(value) : false; // Ha nincs érték, alapértelmezett false
        } catch (error) {
            console.error('Error parsing isLoggedIn:', error);
            return false; // Alapértelmezett érték hiba esetén
        }
    };

    // Funkció az admin állapot lekérdezéséhez
    const getIsAdmin = () => {
        try {
            const value = localStorage.getItem('isAdmin');
            return value ? JSON.parse(value) : false; // Ha nincs érték, alapértelmezett false
        } catch (error) {
            console.error('Error parsing isAdmin:', error);
            return false; // Alapértelmezett érték hiba esetén
        }
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
