describe('Diabetologia oldal tesztelése', () => {
    it('Betöltődik a Diabetológia oldal', () => {
        cy.visit('http://localhost:5173/diabetologia');
        cy.wait(2000);
        cy.url().should('include', '/diabetologia'); // Megnézi, hogy a URL helyes-e
        cy.wait(2000);
        cy.get('h1').should('exist'); // Megnézi, hogy van-e <h1> az oldalon
    });

    it('Meglévő szövődmények ellenőrzése', () => {
        cy.visit('http://localhost:5173/diabetologia');
        cy.wait(2000);
        cy.get('.szovodmenyek').should('exist'); // Megnézi, hogy van-e szövődményeket tartalmazó div
        cy.wait(2000);
        cy.get('.szovodmenyekJobb').should('contain.text', 'Cukorbetegség'); // Ellenőrzi, hogy van-e valami szöveg
    });

    it('Ellenőrzi az érhálózat részt', () => {
        cy.visit('http://localhost:5173/diabetologia');
        cy.wait(2000);
        cy.get('.errendszer').should('exist'); // Az errendszer div-nek léteznie kell
        cy.wait(2000);
        cy.get('.errendszer-keppel').should('have.length', 3); // 3 elem kell legyen benne
        cy.wait(2000);
        cy.get('.szovegerrendszer').should('exist'); // Szöveg is kell legyen
    });
});
