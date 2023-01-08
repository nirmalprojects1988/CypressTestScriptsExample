

describe('Browser stack home page test', () => {

    it('Get all product count', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.log('Trying to find out the total product count')
        cy.get('.shelf-item__buy-btn').should('have.length.at.least', 25)
        cy.get('.shelf-item__buy-btn').contains('Add to cart')
        cy.get('.shelf-item__buy-btn').then((e)=>{

            const val=e.text();
            for(let i=0;i<val.length;i++){
           assert.equal(i.text,'Add to cart')
            }
            
        })
    });
    
});