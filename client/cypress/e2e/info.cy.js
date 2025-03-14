describe('információs oldal tesztelése', () => {

    it('Betöltődik az információs oldal', () => {
      cy.visit('http://localhost:5173/info');
      cy.url().should('include', '/info'); // Megnézi, hogy a URL helyes-e
      cy.get('h2').should('exist'); // Megnézi, hogy van-e <h1> az oldalon
    });
    

  });
  