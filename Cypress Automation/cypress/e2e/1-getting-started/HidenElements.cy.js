
describe('Hidden elements', () =>{

    it('Hidden elements', ()=>{
         cy.visit("https://www.amazon.com/")
         cy.wait(3000)
        cy.get('div#nav-flyout-accountList').invoke('show')
        cy.wait(1000)
        cy.contains('Sign').click()
        cy.wait(5000)
    })

})