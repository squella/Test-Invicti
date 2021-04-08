import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../../pageobjects/login.page';
import AdminPage from '../../pageobjects/admin.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I verify that 2 accounts are visible under Account Details$/, async (table) => {
    await expect(AdminPage.listAccount).toBeExisting();
    for(let i =0; i< table.raw().length; i++){
        await expect(await (await AdminPage.listAccount)[i].getText()).toContain(table.raw()[i])
    }   
});

When(/^I do logout$/, async () => {
    await LoginPage.logout()
});

Then(/^I come back to home page$/, async () => {
    await expect(await (await LoginPage.btnLogout).getText()).toContain("Sign In");
});