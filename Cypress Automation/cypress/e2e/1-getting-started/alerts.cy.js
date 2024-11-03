
describe('Alerts Validation', () =>{

    it.skip('validate of alerts', ()=>{
         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
         cy.wait(3000)
        cy.get('.example > ul > li:nth-child(1) > button').click()
        cy.wait(1000)
        cy.on('windows:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('p#result').should('have.text','You successfully clicked an alert')
    })

    it.skip('Click om cancel or OK button', ()=>{
        // Iaam second commit
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(3000)
        cy.get('.example > ul > li:nth-child(2) > button').click()
        cy.on('windows:confirm', (t)=>{
           return true
       })
       
   })

   it('Stub the prompt',()=>{
    //This is frist comit
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    // This is fourth command
    cy.wait(3000)
    cy.window().then(function(jsAl) {
        cy.stub(jsAl,'prompt').returns("Cypress Automation")
        cy.get('.example > ul > li:nth-child(3) > button').click()
        cy.wait(2000)
        cy.get('#result').contains('You entered: Cypress Automation')
    })

   })


})