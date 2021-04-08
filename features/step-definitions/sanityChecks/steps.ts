import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../../pageobjects/login.page';

const pages = {
    login: LoginPage
}

Given(/^I am an user$/, async () => {});

When(/^I write the (\w+) page of testfire in the browser$/, async (page) => {
    await pages[page].open()
});

Then(/^I see the page loaded in the browser$/, async () => {
    await expect(await (await LoginPage.btnLogout).getText()).toContain("Sign In");
});