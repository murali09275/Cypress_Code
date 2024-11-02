describe('Validate FileUplaod', () =>{
    it('Custome Commands', ()=>{
        cy.visit('https://demowebshop.tricentis.com/')
        cy.wait(3000)
        var p = cy.get('.ico-register')
        cy.verifyAndClick(p)
        cy.wait(3000)


    })
})   