/// <reference types="Cypress" />
describe('Luma Application', () => {
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     // returning false here prevents Cypress from
    //     // failing the test
    //     return false
    //   })
     
      beforeEach(()=>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      })
    it('Enter invalid login details',()=>{        
        cy.get('#email').type('nirmal.chakraborty@gmail.com')
        cy.get('#pass').type('123456');
        cy.get('#send2').click();
    })

    it('Enter valid login details',()=>{
        cy.get('#email').type('roni_cost@example.com')
        cy.get('#pass').type('roni_cost3@example.com');
        cy.get('#send2').click();
        
        
    })
});