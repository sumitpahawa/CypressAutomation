describe("Testing different webelemmnts",function(){
    it("checkbox selection",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption2").check()
        cy.get("#checkBoxOption2").should("be.checked").and('have.value',"option2")
        cy.get("#checkBoxOption2").uncheck()
        cy.get("#checkBoxOption2").should("not.be.checked").and('have.value',"option2")
        cy.get('[type="checkbox"]').check(['option1','option2','option3'])

    })
    //static dro-down
    it("checkbox selection",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("select").select('option1')
        cy.get("select").select('option1').should("have.value",'option1')

    })

      //dynamic drop-down
      it("checkbox selection",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get("#autocomplete").type('ind')
        cy.get('.ui-menu-item').each(($ele,index,$list)=>{
            if($ele.text() ==='India'){
                $ele.click()

            }
        })
        cy.get("#autocomplete").should('have.value',"India")

    })

 //check the visiblity/invisibility of element

    it("element visible or not",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   
        cy.get('#displayed-text').should("be.visible")
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should("be.not.be.visible")
        
    
    })

//radiobutton
    it("element visible or not",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   
        cy.get('[value="radio3"]').check().should("be.checked")
        
        
    
    })

})