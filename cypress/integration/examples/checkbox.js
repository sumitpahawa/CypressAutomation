/// <refrence-types ="Cypress" />
/// <refrence-types ="cypress-iframe" />
import 'cypress-iframe' 
describe("", function () {
    it("", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('option2').should('have.value', 'option2')
        cy.get('[value="radio1"]').check()
        cy.get('[name="radioButton"]').check(['radio2','radio3'])
        cy.get('[type="checkbox"]').check(['option1','option2'])
        cy.get('#autocomplete').type('ind').get('.ui-menu-item').each(($el,index, $list) =>{
            var text1 = $el.text()
            cy.log(text1)
        if(text1==='India'){
            $el.click()
        }
        
        })
        
    })
})