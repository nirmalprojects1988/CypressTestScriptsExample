///<reference types='Cypress'/>

describe('Browser stack demo app', () => {

    it('Lgin to the app', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('#signin').click()   
       cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').type('fav_user{enter}')
       cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').type('testingisfun99{enter}')
       cy.get('#login-btn').click()    
    });
    
});