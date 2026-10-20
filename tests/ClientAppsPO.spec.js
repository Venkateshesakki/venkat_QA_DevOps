const { test, expect } = require("@playwright/test");
const { POManager } = require('../PageObject/POManager.js');
const dataset = JSON.parse(JSON.stringify(require('../Utils/placeOrderData.json')));
for (const data of dataset) {
    test(`client order for ${data.productName}`, async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.userName, data.password);
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductaddToCart(data.productName);
        await dashboardPage.navigateToCart();
        const cartPage = poManager.getCartPage();
        await cartPage.checkout(data.productName);
        const orderPage = poManager.getOrderPage();
        await orderPage.getPlaceOrder(data.userName);
        const thankyouPage = poManager.getThankYouPage();
        const orderID = thankyouPage.getOrderID();
        thankyouPage.navigateToOrder();
        const ordertablepage = poManager.getOrderTablePage();
        ordertablepage.getOrderTable(orderID);



    });
}