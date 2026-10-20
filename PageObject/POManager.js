const { LoginPage } = require('./LoginPage.js');
const { DashboardPage } = require('./DashboardPage.js');
const { MyCartPage } = require('./MyCartPage.js');
const { OrderPage } = require('./OrderPage.js');
const { ThankYouPage } = require('./ThankYouPage.js');
const { OrderTablePage } = require('./OrderTablePage.js');
class POManager {


    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new MyCartPage(this.page);
        this.orderPage = new OrderPage(this.page);
        this.thankyouPage = new ThankYouPage(this.page);
        this.ordertablepage = new OrderTablePage(this.page);
    }

    getLoginPage() {

        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;

    }

    getCartPage() {
        return this.cartPage;

    }

    getOrderPage() {
        return this.orderPage;
    }

    getThankYouPage() {
        return this.thankyouPage;
    }

    getOrderTablePage() {
        return this.ordertablepage;
    }


}

module.exports = { POManager };