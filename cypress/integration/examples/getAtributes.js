describe('getAttrubutes of an element',function(){
    it('getAttributeTest',function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        //Altrenative way to handling tab
        //jquery prop() method is used to get the attribute of selected elemnt
        cy.get('#opentab').then(function(ele){
            const href = ele.prop('href')
            cy.log(href)
            cy.visit(href)
            cy.contains('Consulting').click()
        })

    })
})