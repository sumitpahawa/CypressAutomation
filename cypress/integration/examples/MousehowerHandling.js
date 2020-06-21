/// <reference types="cypress" />
describe("Mousehower handling", function () {
    it("Mousrehover handling by showing the hidden mennu items", function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        //click({force:true}) is also used to click on hidden elemment
        cy.contains('Reload').click({ force: true })

        //show() will only display the child element of immidiate parent 
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('includes', 'top')

    })

})
