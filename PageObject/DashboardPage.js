class DashboardPage{


    constructor(page){
        this.page = page;
        this.products = page.locator("//div[@class='card-body']");
        this.cart = page.locator("//button[contains (@routerlink,'cart')]");
    }

    async searchProductaddToCart(productName){
        const count = await this.products.count();
    for(let i=0;i<count;++i){

        if(await this.products.nth(i).locator("//b").textContent() === productName){
            await this.products.nth(i).locator("//button[contains(text(),'Add To Cart')]").click();
            break;
        }
    }
    
    }

    async navigateToCart(){
        await this.cart.click();
    }
}

module.exports = { DashboardPage };