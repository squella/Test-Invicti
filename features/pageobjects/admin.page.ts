import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminPage extends Page {
    /**
     * define selectors using getter methods
     */
    get listAccount () { return $$('//*[@id="listAccounts"]/option') }

}

export default new AdminPage();
