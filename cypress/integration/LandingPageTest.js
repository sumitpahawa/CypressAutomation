import LandingPage from '../support/PageObjects/LandingPage'
describe("landingpage test suite", function () {
    it ("headermenu test", function () {
        const lp = new LandingPage();
        cy.visit('https://www.shopclues.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          //cy.get('#nav_46').trigger('mouseover')
        lp.Search('knife')
        lp.commonHeaderMenu('Home & Kitchen','Home Berry')
        //lp.selectItemInsideHeaderMenus('Oils & Vinegars')
        
    })
})