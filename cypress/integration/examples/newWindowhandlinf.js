describe("New window handling", function () {
    it("New window handling", function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })

        cy.get('#openwindow').click()
        cy.get('@windowOpen').should('be.calledWith', 'http://www.qaclickacademy.com/')
        cy.visit('http://www.qaclickacademy.com/')
        cy.url().should('includes',"qaclickacademy")
    })

})




