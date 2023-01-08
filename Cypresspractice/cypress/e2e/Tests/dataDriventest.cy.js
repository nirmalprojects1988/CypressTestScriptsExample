describe('Data driven testing using json file', () => {
  
  
it.skip('Enter value in the fullname field', () => {//run this when you want to execute one set data
  
  cy.visit('https://www.testyou.in/Login.aspx')
  cy.fixture('formData').then((data)=>{
  cy.get('#ctl00_CPHContainer_txtUserLogin').type(data.fullname)
  })
});

it('Enter value multiple times with different sets', () => {
  cy.fixture('formData').then((data)=>{
    
    data.forEach(element => {
      cy.visit('https://www.testyou.in/Login.aspx')
      cy.get('#ctl00_CPHContainer_txtUserLogin').type(element.fullname)
    });

    })

});
});