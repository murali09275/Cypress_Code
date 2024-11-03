describe('Validate login flow of Tricentis demo', () =>{

    it("Cypress validations_1", ()=>{
        cy.visit("https://example.cypress.io/commands/actions")
        cy.wait(3000)
        //cy.get('.action-email').type('fake@email.com')
        // cy.get('.action-email').should('have.value', 'fake@email.com')
       

        // .type() with special character sequences
        // cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        // cy.wait(3000)
        // cy.get('.action-email').type('{del}{selectall}{backspace}')
        // cy.wait(3000)

        // // .type() with key modifiers
        //cy.get('.action-email').type('{alt}{option}') //these are equivalent
        //cy.get('.action-email').type('{ctrl}{control}') //these are equivalent
        //cy.get('.action-email').type('{cmd}A',{force:true}) //these are equivalent
        //cy.get('.action-email').type('{shift}')
        //cy.wait(3000)

        // // Delay each keypress by 0.1 sec
        // cy.get('.action-email').clear().type('slow.typing@email.com', { delay: 1000 })
        // cy.get('.action-email').should('have.value', 'slow.typing@email.com')

       // cy.get("textarea[class='form-control action-disabled']").invoke('removeAttr','disabled')
        // cy.wait(3000)
        //  cy.get('.action-disabled').type('test@test.com', { force: true })
        // // // Ignore error checking prior to type
        // // like whether the input is visible or disabled
        // 
        //cy.get("textarea[class='form-control action-disabled']").type("test@gmail.com")
        // cy.get('.action-disabled').should('have.value', 'disabled error checking')
        // cy.get('.action-focus').focus()
        // cy.get('.action-focus').should('have.class', 'focus')
        // .prev().should('have.attr', 'style', 'color: orange;')
        // cy.get('#actions > div > div:nth-child(5) > div > form > div > label').should('have.attr', 'style', 'color: orange;')

        // cy.get('.action-blur').type('About to blur')
        // cy.get('.action-blur').blur()
        // cy.get('.action-blur').should('have.class', 'error')
        // .prev().should('have.attr', 'style', 'color: red;')

        // cy.get('.action-form').find('[type="text"]').type('HALFOFF')
        // cy.get('.action-form').click()
        // cy.get('.action-form').next().should('contain', 'Your form has been submitted!')
        // cy.get('div.action-div').dblclick()
        // cy.get('div.action-div').should('have.class','action-div hidden')
        // cy.get('input.action-input-hidden').should('have.class','action-input-hidden form-control')
        // cy.get('input.action-input-hidden').
        // clear()
        // .type("Cypress Automation")
        // cy.get('input.action-input-hidden').should('have.value','Cypress Automation')
        // cy.get('.rightclick-action-div').rightclick()
        // cy.get('div.rightclick-action-div').should('have.class','rightclick-action-div hidden')
        // cy.get('input.rightclick-action-input-hidden').should('have.class','rightclick-action-input-hidden form-control')
        // cy.get('input.rightclick-action-input-hidden').clear().type("Cypress Automation")
        // cy.get('input.rightclick-action-input-hidden').should('have.value','Cypress Automation')

        // cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
        // cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')
        // cy.get('.action-radios [type="radio"]').not('[disabled]').check()
        // cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked')
        // cy.get('.action-radios [type="radio"]').check(["radio2", "radio1"])
        // cy.get('.action-radios [type="radio"]').should('be.checked')

        // cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2','checkbox3'])
        // cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked')

        // cy.get('.action-checkboxes [disabled]').check({force: true})
        // cy.get('.action-checkboxes [disabled]').should('be.checked')

        // cy.get('.action-radios [type="radio"]').check('radio3',{force: true})
        // cy.get('.action-radios [type="radio"]').should('be.checked')
        
        // cy.get('.action-check [type="checkbox"]').not('[disabled]').uncheck()
        // cy.get('.action-check [type="checkbox"]').not('[disabled]').should('not.be.checked')

        // // .uncheck() accepts a value argument
        // cy.get('.action-check [type="checkbox"]').check('checkbox1')
        // cy.get('.action-check [type="checkbox"]').uncheck('checkbox1')
        // cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked')

        // // .uncheck() accepts an array of values
        // cy.get('.action-check [type="checkbox"]').check(['checkbox1', 'checkbox3'])
        // cy.get('.action-check [type="checkbox"]').uncheck(['checkbox1', 'checkbox3'])
        // cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked')
        // cy.get('.action-check [type="checkbox"][value="checkbox3"]') .should('not.be.checked')

        // // Ignore error checking prior to unchecking
        // cy.get('.action-check [disabled]').uncheck({ force: true })
        // cy.get('.action-check [disabled]').should('not.be.checked')

        //cy.get('select.action-select').select('apples')
        //cy.get('select.action-select').should('have.value','fr-apple')
        //cy.get('select.action-select-multiple').select(['apples','oranges','bananas'])
        //cy.get('.action-select-multiple').should('have.value', ['fr-apples','fr-oranges','fr-bananas'])
        //cy.get('.action-select-multiple').invoke('val').should('include', 'fr-bananas')
        //cy.get('#scroll-horizontal button').scrollIntoView()
        // 
        
        // cy.scrollTo('bottom')
        // cy.scrollTo('top')
        // cy.scrollTo('right')
        // cy.scrollTo('left')
       // cy.scrollTo(250, 250)
       //cy.scrollTo('75%', '25%')\
       cy.get('input.trigger-input-range').invoke('change')
        cy.wait(30000)
        

    })

})

//rightclick-action-input-hidden hidden form-control
//rightclick-action-input-hidden form-control

