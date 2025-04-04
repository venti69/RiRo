describe('Login oldal tesztelése', () => {
    it('Betöltődik a login oldal', () => {
        cy.visit('http://localhost:5173/login');
        cy.wait(2000);
        cy.url().should('include', '/login'); // Megnézi, hogy a URL helyes-e
        cy.wait(2000);
        cy.get('form').should('exist'); // Megnézi, hogy van-e <h1> az oldalon
    });

    it('Bejelentkezés helyes adatokkal', () => {
        cy.visit('http://localhost:5173/login');
        cy.wait(2000);
        cy.get('input[type="email"]').type('tesztfelhasznalo@gmail.com'); // Itt add meg egy létező emailt
        cy.wait(2000);
        cy.get('input[type="password"]').type('Jelszo123');
        cy.wait(2000);
        cy.get('button[type="submit"]').click();
        // Itt a /dashboard lehet más is, nézd meg
    });

    it('Bejelentkezés helytelen adatokkal', () => {
        cy.visit('http://localhost:5173/login');
        cy.wait(2000);
        cy.get('input[type="email"]').type('helytelenemail@gmail.com');
        cy.wait(2000);
        cy.get('input[type="password"]').type('hibasJelszo123');
        cy.wait(2000);
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        cy.get('.Toastify__toast--error').should('be.visible'); // Ellenőrizd az error message elemet
    });
});
