import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#uid') }
    get inputPassword () { return $('#passw') }
    get btnSubmit () { return $('//input[@name="btnSubmit"]') }
    get btnLogout () { return $('//*[@id="LoginLink"]') }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }
    async logout () {
        await (await this.btnLogout).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login.jsp');
    }
}

export default new LoginPage();
