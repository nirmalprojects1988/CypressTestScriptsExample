///<reference types='Cypress'>
describe('Work with webtable', () => {
    it('click on the delete button 2 of Example 1 table', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1.tablesorter>tbody>tr:nth-child(2)>td:nth-child(6)>a:nth-child(2)').click()
    });
});

