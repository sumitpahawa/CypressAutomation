describe ("New window or new tab windoww handling",function(){
    //cypress dont have native to handle the pop window or new tab switching
    // As a workaroung we have to play with dom arrtibute to handle this type of suitation
    //as in html new tabs or window will onky opens when devellper set the target attrubate to blank which means href link will be open in new tab
   // as a work around we have to hanlde this by removin the target attribute , so that link will be open in same window.
   // cypress invoke method is used to invoke the function/jquer function 
   // jquer removeAttr() is used to remove attribute 
    it("new tab handling",function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   
        cy.get('#opentab').invoke("removeAttr","target").click()
        cy.wait(10000)
        //cy.URL is to get the current url
        cy.url().should('include','rahulshetty')

       // cy.go('direct') method is used to navigate back or foward or next or previouy  history
        cy.go('back')
        cy.url().should('include','AutomationPractice')
   
   

      })
    })