describe('bstack home page', () => {
it.skip('Verify text', () => {
    cy.visit('https://www.programsbuzz.com/course/cypress-tutorial')
    cy.get('h1.page-title').find('span').then(function(e){
        const val=e.text();
        expect(val).to.contains('Cypress Tutorial')
    })
    
});

it('verify text for bstack', () => {
    cy.visit('https://www.bstackdemo.com/')
    cy.get('.UserNav_root__343id.align-center.pt-1').find('a').then(function(e){
        const value=e.text();
        expect(value).to.contains('Sign In')
    })
});
});