
Cypress.Commands.add("SearchOperation", (searchElement) =>{
        cy.get('#small-searchterms').type(searchElement)
        cy.get('.search-box-button').click()


})

Cypress.Commands.add("verifyAndClick", (element) =>{
    element.should('be.visible')
   element.click()


})

Cypress.Commands.add("SelectvalueFromDropDown", (element,item) =>{
    element.should('be.visible')
   element.select(item)


})


