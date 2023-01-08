import { faker } from '@faker-js/faker';
describe('Data driven testing using faker library', () => {
    let randomEmail=faker.internet.email();
    it('Enter data in the Email id field', () => {
        cy.visit('https://www.testyou.in/Login.aspx')
        cy.get('#ctl00_CPHContainer_txtUserLogin').type(randomEmail)
    });
    
});