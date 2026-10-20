class MyCartPage {

    constructor(page) {
        this.page = page;
        this.cartList = page.locator("//div//li");
        this.checkoutButton =page.locator("//div[contains(@class,'subtotal cf')]//button");
    }

    async checkout(productName) {
        await this.cartList .first().waitFor();
        const bool = await this.getProductName(productName).isVisible();
        console.log(bool)
        await this.checkoutButton.click();
    }

    getProductName(productName){
        return this.page.locator("//h3[contains(text(),'${productName}')]");
    }
}
module.exports = { MyCartPage };