/// <reference types="Cypress" />
class LandingPage {

    selectCategoryFromCommonHeaderMenu(Menuname, Submenu) {
        return cy.get('[onmouseover="mouseoverNavigation(this);"]').each((element, index, list) => {
            if (element.text() === (Menuname)) {
                const Name1 = element.text();

                cy.get('[onmouseover="mouseoverNavigation(this);"]').eq(index).trigger('mouseover')
                    .find('.list_blocks li a').invoke('show').contains(Submenu).invoke('removeAttr', 'target').click({ force: true })
                cy.wait(9000)
            }
        })
    }

    SingInLinK() {
        return cy.get('#sign-in').click()
    }

    registerTab() {
        cy.get('div#register.user_register.default_form.tab_data').invoke('show')
        cy.get('.login_register_cont.popup_inr_dv').invoke('show').wait(3000)
        return cy.get('.tabs').find('#reg_tab').click({force:true}).wait(2000)
    }
    emailIDToRegister() {
        return cy.get('#register > form > fieldset > div:nth-child(1) > input').type("ritapahawa06@gmail.com")
    }

    mobileNumberToRegister() {
        return cy.get('#register > form > fieldset > div:nth-child(2) > input').type('9953243361')
    }
    passwordToRegister() {
        return cy.get('#register > form > fieldset > div.s_row.register_password > input').type('sum@2506')
    }

    registerWithPasswordCheckbox() {
        return cy.get('[name="register_with_password"]').check()
    }
    registerButton() {
        return cy.get('[name="register"]').type('sum@2506')
    }

    LoginTab() {
        //cy.get('.login_register_cont.popup_inr_dv').invoke('show')
        return cy.get('.tabs').find('#login_tab').click({ force: true })
    }
    emailID_mobileNumberToLogin() {
        cy.get('.user_login.default_form.tab_data').invoke('show')
        return cy.get('#main_user_login').type('1234567890')
    }
    passwordToLogin() {
        cy.get('.user_login.default_form.tab_data').invoke('show')


        return cy.get('#login > form > fieldset > div:nth-child(3) > input').type('123456')
    }
    loginBtn(){
        return cy.get('#login_button').click()
    }
    loginWithFacbookBtn() {
        return cy.get('.fb').click()
    }
    facebookID() {
        return cy.get('#email_container').type('sumit.pahawa@gmail.com')
    }
    facebookPassword() {
        return cy.get('#pass').type('sumit.pahawa@gmail.com')
    }
    facebookLoginBtn() {
        return cy.get('#loginbutton').click()
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