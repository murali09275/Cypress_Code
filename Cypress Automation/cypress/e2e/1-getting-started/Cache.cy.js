
describe('Validate cookies and cache', () =>{

    it('validate Cookies', ()=>{
       cy.visit('https://the-internet.herokuapp.com')
       Cypress.Cookies.debug(true)
       cy.setCookie('Cypress','Automation')
       cy.getCookie('Cypress').should('have.property','value','Automation')
       cy.clearCookie('Cypress')
       cy.log(cy.getCookies())
       cy.clearCookies()
       cy.getCookies().should('be.empty')

       //Cache
    })
})