///<reference types = "Cypress" />
///<reference types = "cypress-iframe" />

import 'cypress-iframe'

describe("FameHandling",function(){
it('frameHandling',function(){
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("[href='#/mentorship']").eq(0).click()
    cy.iframe().find(".pricing-price.ls-1.text-dark.margin-top-1-25").eq(0).then(function(amount){
        const str = amount.text()
        cy.log(str)
      expect(str).to.equal('$30.00')
    })
})
})