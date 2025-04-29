describe('információs oldal tesztelése', () => {

    it('Betöltődik az információs oldal', () => {
      cy.visit('http://localhost:5173/info');
        cy.wait(2000);
      cy.url().should('include', '/info');
        cy.wait(2000);
      cy.get('h2').should('exist');
        cy.wait(2000);
      cy.get('summary').click();
    });
    

  });
  