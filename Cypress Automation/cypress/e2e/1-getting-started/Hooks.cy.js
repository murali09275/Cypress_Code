describe('Validate login flow of Tricentis demo', () =>{

    before(()=>{
        cy.log("I am before block")
    })

    beforeEach(function(){
        // cy.fixture('tricentis').then(function(testdata){
        //     this.testdata = testdata
        // })

        cy.log("I am beforeEach block")
    })

    after(()=>{
        cy.log("I am After block")
    })

    afterEach(()=>{
        cy.log("I am AfterEach block")
        
    })

    it("Validate the login with User details - user1", function(){

        cy.log("I am Test case 1")

    })

    it("Validate the login with User details - user2", function(){
        cy.log("I am Test case 2")
    })

    it.skip("Validate the login with User details - user3", function(){
        cy.log("I am Test case 3")
    })   

    it.only("Validate the login with User details - user4", function(){
        cy.log("I am Test case 4")
    })  

    it("Validate the login with User details - user5", function(){
        cy.log("I am Test case 5")
    })  
    
})    