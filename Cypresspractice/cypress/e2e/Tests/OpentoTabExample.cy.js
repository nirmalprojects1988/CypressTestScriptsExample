///<reference types='Cypress'/>
describe('This example to demonstrate to open to new tab', () => {
    it('Open to tab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.large-4.large-centered.columns>div>a').invoke('removeAttr','target').click();
        cy.go('back')
        
    });
});