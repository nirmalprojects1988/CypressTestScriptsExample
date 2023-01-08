///<reference types='Cypress'/>
describe('internet herokuapp checkbox testing', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Click on the checkbox', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('input:nth-child(1)').click()
        cy.end()
    });
    
});