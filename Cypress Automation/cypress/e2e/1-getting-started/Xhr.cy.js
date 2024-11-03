describe('XHR Requests', () =>{

    it.skip('XHR requests', ()=>{
        //cy.visit('https://jsonplaceholder.cypress.io/comments')
        cy.wait(3000)
        cy.request('https://jsonplaceholder.cypress.io/comments').as('abc')
        cy.get('@abc').then((response) =>{
            cy.log(response.body)
            cy.log(response.status)

        })
    })


    it('XHR requests, Tricentis', ()=>{
        //cy.visit('https://jsonplaceholder.cypress.io/comments')
        cy.wait(3000)
        cy.request('https://demowebshop.tricentis.com/').as('demo')
        cy.get('@demo').then((response) =>{
            cy.log(response.body)
            cy.log(response.status)

        })
    })

})