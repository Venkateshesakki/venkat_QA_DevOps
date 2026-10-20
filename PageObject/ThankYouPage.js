class ThankYouPage {

    constructor(page) {
        this.page = this.page;
        this.orderIDText = page.locator("//td//label[@class='ng-star-inserted']");
        this.orderTab = page.locator("//button[contains(@routerlink,'myorders')]");
    }

    async getOrderID() {
        const orderID = (await this.orderIDText.textContent()).replaceAll("|", "").trim();
        console.log("order id is:" + orderID);
        return orderID;

    }

    async navigateToOrder() {
        await this.orderTab.click();
    }
}

module.exports = { ThankYouPage };