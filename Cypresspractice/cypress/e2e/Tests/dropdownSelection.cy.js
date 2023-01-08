///<reference types='Cypress'/>

describe('Rediff mail drop down test suit', () => {
    it('Select a day from the day dropdown ', () => {
        cy.visit('https://register.rediff.com/register/register.php')
      // cy.get('td[colspan="3"]>select[name="cityef41b933"]').select('Agartala').should('have.value','Agartala')
       // cy.get('select[id="country"]').select('6').should('have.value', '6')
       cy.get('select[name="countryef41b933"]').select('6').should('have.value', '6')
       
    });
});