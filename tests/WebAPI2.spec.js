 const {test,expect} = require('@playwright/test')
 let webContext;
 const email = "venkatesh_e@gmail.com";
test.beforeAll(async ({ browser }) => {
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const username = page.locator("//input[@id='userEmail']");
    const password = page.locator("//input[@id='userPassword']");
    const signIn = page.locator("//input[@id='login']");
    await username.fill(email);
    await password.fill("Vision@1617");
    await signIn.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});
       webContext = await browser.newContext({
        storageState: 'state.json'
    });

 })

 test('end to end',async() =>
{   const productName = "ZARA COAT 3";
    
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator("//div[@class='card-body']");
    const cart = page.locator("//button[contains (@routerlink,'cart')]");
    
    const count = await products.count();
    for(let i=0;i<count;++i){

        if(await products.nth(i).locator("//b").textContent() === productName){
            await products.nth(i).locator("//button[contains(text(),'Add To Cart')]").click();
            break;
        }
    }
    await cart.click();
    await page.locator("//div//li").first().waitFor();
    const bool = await page.locator("//h3[contains(text(),'ZARA COAT 3')]").isVisible();
    console.log(bool)
    await page.locator("//div[contains(@class,'subtotal cf')]//button").click();
    await page.locator("//input[@placeholder='Select Country']").pressSequentially("ind");
    const dropDown = page.locator("//section[contains(@class,'ta-results')]//button");
    await dropDown.first().waitFor({ state: 'visible' });
    const optcount = await dropDown.count();
    console.log("count is:" +optcount);
   for(let i=0;i<optcount;++i){
        const text = await dropDown.nth(i).textContent();
        if(text.trim()== "India"){
            await dropDown.nth(i).click();
            break;
        }

}
    expect(page.locator("//div[@class='user__name mt-5']//label")).toHaveText(email);
    await page.locator("//div[@class='actions']//a").click();
    const orderID = (await page.locator("//td//label[@class='ng-star-inserted']").textContent()).replaceAll("|", "").trim();
    console.log("order id is:" +orderID);
    await page.locator("//button[contains(@routerlink,'myorders')]").click();
    const orderNumbers = page.locator("//table//tbody/tr//th");
    await orderNumbers.first().waitFor({ state: 'visible' });
    const ordNum = await orderNumbers.count();
    for(let i=0;i<ordNum;++i){
        const id = await orderNumbers.nth(i).textContent();
        if(id === orderID){
           const row = orderNumbers.nth(i);
           await row.locator("xpath=./following-sibling::td[5]//button").click();
           break;

        }
    }
        await page.screenshot({
    path: 'C:\\Users\\DELL\\Pictures\\Screenshots\\order-page.png',
    fullPage: true
});




});

test('Assignment',async ()=>
{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    const productName = page.locator("//div[@class='card-body']//b");
    const titles = await productName.allTextContents();
    console.log(titles);
 


});