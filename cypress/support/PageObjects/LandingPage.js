/// <reference types="Cypress" />
class LandingPage {

    commonHeaderMenu(Menuname, Submenu) {
        return cy.get('[onmouseover="mouseoverNavigation(this);"]').each((element, index, list) => {
            if (element.text() === (Menuname)) {
                const Name1 = element.text();
               
                cy.get('[onmouseover="mouseoverNavigation(this);"]').eq(index).trigger('mouseover').find('.list_blocks li a').invoke('show').contains(Submenu).invoke('removeAttr','target').click({force: true})
          /*       cy.get('.ul_menu_block ul li a').each(($el, index, $list) => {
                    const Name = $el.text();
                    cy.log(Name)
                    if (Name.includes(Submenu)) {
        
                       
                        cy.get('[onclick="trackingData(this)"]').eq(index).invoke('show').invoke('removeAttr','target').click({force: true})
                    
                    }
        
                }) */



            }
        })
    }


    selectItemInsideHeaderMenus(Submenu) {
        cy.get('[onclick="trackingData(this)"]').each(($el, index, $list) => {
            const Name = $el.text();
            cy.log(Name)
            if (Name.includes(Submenu)) {

                cy.contains(Submenu).invoke('removeAttr', 'target').click()
            }

        })

    }

    SingInLinK() {
        return cy.get('#sign-in').click()
    }

    Search(searchtext) {
        cy.get('#autocomplete').type(searchtext)
        cy.get('#search-result li a').each((ele, index, list) => {

            cy.log(ele.text())
            if (ele.text().trim() === 'knife block with wooden stand') {
                cy.log(ele.text())
                cy.contains(ele.text()).click()
            }
        })



    }




}


export default LandingPage;