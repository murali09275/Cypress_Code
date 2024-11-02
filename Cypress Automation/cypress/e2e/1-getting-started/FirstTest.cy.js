
describe('Validate login flow of Tricentis demo', () =>{

    it('validate login button on tricentis demo demo', ()=>{
        // cy.visit("https://demowebshop.tricentis.com/")
        // cy.wait(2000)

       
    })

    it('Validate Registartion functionality', ()=> {
        // cy.visit("https://demowebshop.tricentis.com/")
        // cy.wait(2000)
        // cy.get('.ico-register').should('be.visible')
        // cy.get('.ico-register').click()
        // cy.wait(3000)
        // cy.get('#gender-female').click()
        // cy.get('#FirstName').type("Rani")
        // cy.get('#LastName').type("KMS")
        // cy.get('#Email').type("Rani.kms1@gmail.com")
        // cy.get('#Password').type("Test@123")
        // cy.get('#ConfirmPassword').type("Test@123")
        // cy.get('#register-button').click()
        // cy.wait(7000)
        // cy.get("div[class='result']").should('have.text','Your registration completed')

        
    })
    it('Validate login functionality', ()=>{
     // cy.get('.ico-login').should("be.visible")
        // cy.get('.ico-login').contains('Log in')
        // cy.get('.ico-login', {timout:10000}).click()
        // cy.wait(10000)
        // cy.get("input[id='Email']", {timout:2000}).clear()
        // cy.get("input[id='Email']", {timout:2000}).type("test@test.com")
        // cy.get("input[id='Password']", {timeout:2000}).clear()
        // cy.get("input[id='Password']", {timeout:2000}).type("test123")
        // cy.wait(5000)
    })    


    it('validate find functionality of Cypress',()=>{
        // cy.visit("https://demoqa.com/")
        // //cy.wait(10000)
        // cy.get('#app > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > span > div').click()
        // cy.wait(3000)
        // cy.get('#app > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div > ul').find('#item-0').click()
        // cy.wait(3000)
        
        
    })

    it('validte with in functionality',()=>{
        cy.visit("https://www.w3schools.com/")
        cy.wait(3000)
        cy.get('#tnb-google-search-inner-container').within(() => {
            cy.get('tnb-google-search-input').type("Cypress")
            cy.wait(4000)

        })
    })

    it('chain of assesrtions',()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
        cy.get('#rightPanel > ul.services > li:nth-child(2) > a')
            .should('have.attr','href','services/ParaBank?wsdl')
            .should('have.text','Withdraw Funds')

    })
    
    it('validate first and last functionality',()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
       cy.get("ul[class='events']").first().click()
       cy.get("ul[class='events']").last().should('have.text','New! Online Account Transfers')
        cy.wait(3000)

    })

    it('validate invoke functionality', ()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
        cy.get('a[href="services/ParaBank?wsdl"]').invoke('text').should('contain','Withdraw')
        cy.get('li[class="Solutions"]').should('have.text','Solutions')
    })

    it('validate explicit functionality', ()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
        cy.get('a[href="news"]').then(($ele)=>{
            expect($ele.text()).to.eq('New! Online Bill Pay')
        })
    })

    it('validate have.length assesrtion', ()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
        cy.get("ul[class='services'] > li").should('have.length',1)
        

    })

    it('validate not assesrtion', ()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
        cy.get("li[class='captionone']")
        .should('not.have.text',"ATM Services!")
        .should('not.have.length',2)
        cy.get("#rightPanel > ul.services > li:nth-child(2) > a").should('not.have.attr','href','services/ParaBank?wsdl')
        

    })

    it('Click operations', ()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
    //   cy.get('#rightPanel > ul:nth-child(2) > li:nth-child(2) > a').click({force: true})
       //cy.get('#rightPanel > ul:nth-child(2) > li:nth-child(2) > a').dblclick(bottomRight)
       cy.get('#rightPanel > ul:nth-child(2) > li:nth-child(2) > a').rightclick()
       cy.wait(3000)
        

    })

    it('type options', ()=>{
        cy.visit('https://para.testar.org/')
        cy.wait(3000)
        cy.get('#loginPanel > form > div:nth-child(2) > input').type("Test",{delay:1000})
       cy.wait(3000)
        

    })

    it('check operations', ()=>{
        cy.visit('https://demowebshop.tricentis.com/login')
        cy.wait(3000)
        cy.get("#RememberMe").check()
        cy.wait(3000)
        cy.get("#RememberMe").uncheck()
        cy.wait(5000)
    })

   it('dropdpwn operations', ()=>{
    cy.visit('https://demowebshop.tricentis.com/books')
    cy.wait(3000)
    cy.get('#products-orderby').select('Created on')
    cy.get('#products-pagesize').select('12')
    cy.get('#products-viewmode').select('List')
    cy.wait(5000)
   })

   it.only('WellsFargo validations', ()=>{
    cy.visit('https://www.wellsfargo.com/')
    cy.wait(3000)
    cy.get('#save-username').should('have.attr','value','false')
    cy.get('#save-username').check()
    cy.wait(2000)
    cy.get('#save-username').should('have.attr','value','true')
    cy.wait(5000)
   })


})