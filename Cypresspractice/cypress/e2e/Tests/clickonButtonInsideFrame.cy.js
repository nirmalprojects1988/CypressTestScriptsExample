///<refeence types='Cypress'/>

describe('Frame example suite', () => {
    it.only('Click on a button under a frame and verify the test "Hello World" ', () => {
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick')
        cy.get('#iframewrapper>#iframeResult')//iframe/frame locator 
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')// it will find body inside frame/iframe
                cy.wrap($body)
                    .find('button[onclick="myFunction()"]').click()
            });

        cy.get('#iframewrapper>#iframeResult')//iframe/frame locator 
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')// it will find body inside frame/iframe
                cy.wrap($body)
                    .find('#demo').then(function (t) {
                        const frmtxt = t.text()
                        //assertion to verify text
                        expect(frmtxt).to.contains('Hello World');
                        cy.log(frmtxt);
                    })
            });


    });



});