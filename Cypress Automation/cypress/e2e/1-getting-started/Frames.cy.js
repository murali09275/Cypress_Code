import 'cypress-iframe'

describe('Alerts Validation', () =>{

    //this functionality is about switching to iframe
    it('validate of alerts', ()=>{
        //Launch the jquery URL
        cy.visit('https://jqueryui.com/draggable/')
        cy.wait(3000)
        //load the iframe to find the elements
        cy.frameLoaded('.demo-frame')
        //find the draggable element and click on it
        cy.iframe().find('div#draggable').then((e)=>{
            e.click()
        })
    
    })
}) 