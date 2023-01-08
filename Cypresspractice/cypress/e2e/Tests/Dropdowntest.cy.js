///<reference types='Cypress'/>
describe('internet herokuapp drop down', () => {
    it('Select value from drop down', () => {

        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('div[class="example"] select').select('Option 1');
        
        
    });
});