const { expect } = require('@playwright/test');

class OrderPage {

    constructor(page) {

        this.page = page;
        this.country = page.locator("//input[@placeholder='Select Country']");
        this.dropDown = page.locator("//section[contains(@class,'ta-results')]//button");
         this.userNameText =  page.locator("//div[@class='user__name mt-5']//label");
        this.placeOrder = page.locator("//div[@class='actions']//a");
    }

    async getPlaceOrder(userName) {
        await this.country.pressSequentially("ind");
        await this.dropDown.first().waitFor({ state: 'visible' });
        const optcount = await this.dropDown.count();
        console.log("count is:" + optcount);
        for (let i = 0; i < optcount; ++i) {
            const text = await this.dropDown.nth(i).textContent();
            if (text.trim() == "India") {
                await this.dropDown.nth(i).click();
                break;
            }

        }
       await expect(this.userNameText).toHaveText(userName);
        await this.placeOrder.click();


    }
}

module.exports={ OrderPage };