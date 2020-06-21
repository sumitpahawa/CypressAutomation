describe("Webtable handling", function () {
    it("Webtable handling", function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($ele, index, $list) => {


            const text = $ele.text()
            if (text.includes('Python')) {
                cy.log(index)
                cy.log(text)
                cy.get('tr td:nth-child(2)').eq(index).next().then((str) => {
                    const rate = str.text()
                    cy.log(rate)
                    expect(rate).to.equal('25')
                })
                
            }

        })

    })

})
