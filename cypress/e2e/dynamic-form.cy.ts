describe('Dynamic Form Test', () => {
  it('should fill the form, submit, and reset', () => {
    cy.visit('http://localhost:4200/');

    cy.get('[id="firstName"]').should('exist').type('Test');
    cy.get('[id="lastName"]').should('exist').type('User');
    cy.get('[id="email"]').should('exist').type('test-1234@user.com');
    cy.get('[id="dateOfBirth"]').should('exist').type('1995-05-11');
    cy.get('[id="phoneNumber"]').should('exist').type('5449281808');
    cy.get('[id="country"]').should('exist').select('Canada');
    cy.get('[id="subscribe"]').should('exist').click();
    cy.get('[id="bio"]').should('exist').type('test value for cypress test');
    cy.get('[id="programming"]').should('exist').click();
    cy.get('[id="design"]').should('exist').click();
    cy.get('[id="writing"]').should('exist').click();

    cy.get('button[type="submit"]').click();

    cy.get('button[type="reset"]').click();
    cy.get('button[type="reset"]').should('be.disabled');

    cy.get('[id="firstName"]').should('have.value', '');
    cy.get('[id="lastName"]').should('have.value', '');
    cy.get('[id="email"]').should('have.value', '');
    cy.get('[id="dateOfBirth"]').should('have.value', '');
    cy.get('[id="phoneNumber"]').should('have.value', '');
    cy.get('[id="country"]').should('have.value', null);
    cy.get('[id="subscribe"]').should('not.be.checked');
    cy.get('[id="bio"]').should('have.value', '');
    cy.get('[id="programming"]').should('not.be.checked');
    cy.get('[id="design"]').should('not.be.checked');
    cy.get('[id="writing"]').should('not.be.checked');
  });
});
