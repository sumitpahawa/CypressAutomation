///<reference types = "Cypress" />
describe('Registration page testcases', function () {
    before(function () {
        cy.fixture('userData').then(function (data) {
            this.testData = data;

        })
    })
    it("Testcase1", function () {
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        cy.get("[name='name']").eq(1).type(this.testData.Name)
        cy.get("[name='name']:nth-child(2)").should('have.attr', 'minlength', '2')
        cy.get('select').select(this.testData.Gender)
        cy.get(':nth-child(4) > .ng-valid').should('have.value', this.testData.Name)
        cy.get(':nth-child(4) > .ng-valid').then(function (str) {
            cy.log(str.prop('value'))
            expect(str.prop('value')).to.equal(this.testData.Name)

        })
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get("[href='/angularpractice/shop']").click()
        this.testData.Product.forEach((element)=>{
            cy.addProductToCart(element)
        })
   
    })
})