describe("First Test Suite",function(){

    it("first testcase",function(){
        
        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".products").as('productsMain')
        cy.get(".search-keyword").type("ca")
        console.log('SFFFF')
        cy.get(".product:visible").should("have.length",4)
        cy.get("@productsMain").find('.product').should("have.length",4)
        cy.get("@productsMain").find('.product').eq(2).contains("ADD TO CART").click()
        cy.get("@productsMain").find('.product').each(($ele,index,$list)=>{
            if($ele.text().includes('Capsicum')){
                $ele.find("[type='button']").click()
            }

        } )
        cy.get('.brand').should('have.text',"GREENKART")
        cy.get('.brand').then(function(logo)
        {
            const logoElem = logo.text()
            cy.log(logoElem)
            
        } )

    })
})  