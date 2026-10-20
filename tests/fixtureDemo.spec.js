const {expect} = require('@playwright/test')
const {customTest} = require('../Utils/fixture')

customTest('Fixture Demo test',async({authenticatedPage,createOrder}) =>{

    await authenticatedPage.goto("https://rahulshettyacademy.com/client");
    await authenticatedPage.locator("//button[contains(@routerlink,'myorders')]").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderID)).toBeVisible();

});