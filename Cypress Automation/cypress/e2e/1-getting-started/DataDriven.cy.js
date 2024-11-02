describe('Validate login flow of Tricentis demo', () =>{

    const url = Cypress.env('Tricentisurl')
    beforeEach(function(){
        cy.fixture('tricentis').then(function(testdata){
            this.testdata = testdata
        })

    })


    it("Validate the login with User details - user1", function(){
        cy.log(Cypress.env('url'))
        cy.log("I am Test case 1")
        cy.visit(url)
        cy.wait(3000)
        cy.get('.ico-login').should('be.visible').click()
        cy.wait(2000)
        cy.get('#Email').type(this.testdata.user2)
        cy.get('#Password').type(this.testdata.password2)
        cy.get('input.login-button').click()
        cy.get('div.header-links > ul:nth-child(1) > li:nth-child(1) > a').should('have.text',this.testdata.user2)
        cy.get('.ico-logout').click()

    })

    it("Validate the login with User details - user2", function(){
        cy.log("I am Test case 2")
        cy.visit(url)
        cy.wait(3000)
        cy.get('.ico-login').should('be.visible').click()
        cy.wait(2000)
        cy.get('#Email').type(this.testdata.user2)
        cy.get('#Password').type(this.testdata.password2)
        cy.get('input.login-button').click()
        cy.get('div.header-links > ul:nth-child(1) > li:nth-child(1) > a').should('have.text',this.testdata.user2)
        cy.get('.ico-logout').click()
    })

  
    
})    