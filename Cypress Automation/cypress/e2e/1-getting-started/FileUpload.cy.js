describe('Validate FileUplaod', () =>{
    it('Validating File Uplaod', ()=>{
        const fileLocation = "'/Users/muralikrishna/Desktop/image.png'"
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(fileLocation)
        cy.get('#file-submit').click()
        

    })
})