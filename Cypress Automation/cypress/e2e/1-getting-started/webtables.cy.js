


describe('Cypress Web Tables', () =>{
    var a=0, cols
    it.skip("Cypress Web Tables validations", ()=>{
        cy.visit("cypress/webtables.html")
        cy.wait(1000)
        cy.get("table#countries > tbody > tr").each(($row, index, $rows) =>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols) =>{
                    cy.log($col.text())
                })
            })
        })
        
    })

    it.skip("Get data from sepcific cell", ()=>{
        cy.visit("cypress/webtables.html")
        cy.wait(1000)
        cy.get("table#countries > tbody > tr:nth-child(6) > td:nth-child(5)").then(($e) =>{
            cy.log($e.text())
        })
        
    })


    it("Validate the number of rows and columns", ()=>{
        cy.visit("cypress/webtables.html")
        cy.wait(1000)
       // cy.get("table#countries > tbody > tr").should('have.length', 197)
       // cy.get("table#countries > tbody > tr:nth-child(1) > td").should('have.length', 5)
        cy.get("table#countries > tbody").find('tr').then(($rows)=>{
            a = Cypress.$($rows).length
        })

        cols = cy.get("table#countries > tbody > tr:nth-child(1) > td")
            
        cy.log("Number of rows "+a)
        cy.log("Number of cols "+cols)

        for(var i = 1; i<=a; i++){
            for(var j = 1; j<=cols; j++){
                cy.get("table#countries > tbody > tr:nth-child("+i+") > td:nth-child("+j+")").then(($e)=>{
                    cy.log($e.text())
                })
            }
        }
        
        
    })
})