describe ("Alert handling",function(){
    it("Alert with ok button",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()  
      //window:alert is triggered to display a pop on window
      //Cypress ha sability to control and manipulate the DOM 
      //cy.on method is use to trugger the eveent
      cy.on('window:alert',(str)=>{
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      })


      it("Alert with ok and confirm button",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()  
      //window:confirm is triggered to display a confirm pop on window
      //Cypress ha sability to control and manipulate the DOM 
      //cy.on method is use to trugger the eveent
      cy.on('window:confirm',(str)=>{
          expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

      })
})