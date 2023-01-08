///<reference types='Cypress'/>
import 'cypress-file-upload';
describe('internet herokuapp file upload', () => {
    it('Upload a file', () => {
        const filepath="./Resources/image1.jpeg"
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('image1')
        

    });
});