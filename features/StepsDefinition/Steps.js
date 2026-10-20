const playwright =  require('@playwright/test')
const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../PageObject/POManager');

Given('login to the application using {string} and {string}', async function (userName, password) {

        const loginPage = this.poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(userName, password);
 
});

When('search the product {string} and add to cart', async function (productName) {

     this.dashboardPage = this.poManager.getDashboardPage();
        await this.dashboardPage.searchProductaddToCart(productName);
        await this.dashboardPage.navigateToCart();
  
});

Then('verify the product {string} in the cart', async function (productName) {

         const cartPage = this.poManager.getCartPage();
        await cartPage.checkout(productName);
  
});

When('place the order and verify the email {string}', async function (userName) {

     const orderPage = this.poManager.getOrderPage();
        await orderPage.getPlaceOrder(userName);
 
});

Then('get the orderID', async function () {

    const thankyouPage = this.poManager.getThankYouPage();
        this.orderID = thankyouPage.getOrderID();
        thankyouPage.navigateToOrder();

  
});

Then('verify the order in the order table', async function () {

    const ordertablepage = this.poManager.getOrderTablePage();
        ordertablepage.getOrderTable(this.orderID);
 
});