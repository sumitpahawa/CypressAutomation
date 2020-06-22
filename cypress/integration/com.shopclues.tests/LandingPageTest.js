import LandingPage from '../../support/PageObjects/LandingPage'
describe("landingpage test suite", function () {
    it("headermenu test", function () {
        const lp = new LandingPage();
        cy.visit('https://www.shopclues.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        // lp.Search('knife')
        //lp.selectCategoryFromCommonHeaderMenu('Home & Kitchen', 'Home Berry')
        lp.SingInLinK()
        lp.registerTab()
        lp.emailIDToRegister()
        lp.registerWithPasswordCheckbox()
        lp.mobileNumberToRegister()
        lp.passwordToRegister()
        lp.registerButton()
        lp.LoginTab()
        lp.emailID_mobileNumberToLogin()
        lp.passwordToLogin()
        lp.loginBtn()


    })
})