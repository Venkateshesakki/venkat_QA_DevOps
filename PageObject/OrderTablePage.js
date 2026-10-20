class OrderTablePage {

    constructor(page) {
        this.page = page;
        this.orderNumbers = page.locator("//table//tbody/tr//th");

    }

    async getOrderTable(orderID) {

        await this.orderNumbers.first().waitFor({ state: 'visible' });
        const ordNum = await this.orderNumbers.count();
        for (let i = 0; i < ordNum; ++i) {
            const id = await this.orderNumbers.nth(i).textContent();
            if (id === orderID) {
                const row = this.orderNumbers.nth(i);
                await row.locator("xpath=./following-sibling::td[5]//button").click();
                break;

            }
        }
        await this.page.screenshot({
            path: 'C:\\Users\\DELL\\Pictures\\Screenshots\\order-page.png',
            fullPage: true
        });
    }
}

module.exports = { OrderTablePage };