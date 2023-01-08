///<reference types='Cypress'/>
describe('internet herokuapp right click example', () => {
    
    it('Right click on element', () => {
        cy.visit('https://the-internet.herokuapp.com/context_menu')
        cy.get('div[oncontextmenu="displayMessage()"]').rightclick()
    });
    
});