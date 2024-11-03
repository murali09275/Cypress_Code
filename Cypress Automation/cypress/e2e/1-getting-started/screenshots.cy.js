describe('Validate Screenshots', () =>{
    it('Validating File Uplaod', ()=>{
        const fileLocation = "'/Users/muralikrishna/Desktop/image.png'"
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.screenshot('CypressAutomation')
        cy.get('#drag-drop-upload').screenshot()
        

    })
})