
describe('Tabs Validation', () =>{

    it('validate login button on tricentis demo demo', ()=>{
         cy.visit("https://the-internet.herokuapp.com/windows")
         cy.wait(3000)
         cy.get('.example > a')
            .invoke('removeAttr', 'target')
            .click()
         cy.url().should('include','https://the-internet.herokuapp.com/windows/new')   
         cy.go('back')
         cy.url().should('include','https://the-internet.herokuapp.com/windows')
         cy.get('.example > a').should('be.visible')
    })
})