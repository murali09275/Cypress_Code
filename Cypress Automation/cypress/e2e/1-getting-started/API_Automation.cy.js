describe('API', () =>{

    it.skip('GET', ()=>{
        cy.request('GET','https://jsonplaceholder.cypress.io/comments', {   
        }).then((response)=>{
            cy.log(response.status)
            cy.log(response.body)
        })
    })


    it('GET Requesr', ()=>{
       //I am anothr Changes
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments",
            headers:{
                'path':'/comments'
            } 
        }).then((response) =>{
            cy.log(response.status)
            cy.log(response.body)
        })
    
    })

    it('POST Requesr', ()=>{
       
        cy.request({
            method: "POST",
            url: "https://demowebshop.tricentis.com/register",
            form:true,
            boby:{
                "Gender":'F',
                "FirstName":"October",
                "LastName":"2024",
                "Email":"OCt2024@mmail.com",
                "Password":"Rajesh123",
                "ConfirmPassword":"Rajesh123",
                "register-button": "Register"
            }
        }).then((response) =>{
            cy.log(response.status)
            cy.log(response.body)
        })
    
    })

})