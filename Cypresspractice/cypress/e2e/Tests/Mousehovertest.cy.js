///<reference types='Cypress'/>
describe('Browser stack mouse hover', () => {
    
    it('Mouse hover example using force', () => {
        cy.visit('https://www.browserstack.com/guide/mouse-hover-in-selenium')
        cy.get('.nav_item_name').click()
        cy.get('a[class="menu-item-documentation"]').click({ force: true })
       

    });

    it('Mouse hover example using invoke', () => {
        cy.visit('https://www.browserstack.com/guide/mouse-hover-in-selenium')
        cy.get('.nav_item_name').click()
        cy.get('a[class="menu-item-documentation"]').invoke('show')
        cy.get('.developers-menu-control>[title="Documentation"]').click()

    });
    
});