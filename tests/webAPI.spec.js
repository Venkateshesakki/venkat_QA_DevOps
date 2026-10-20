const {test,expect,request} = require('@playwright/test')
const {APIUtils} = require('../Utils/APIUtils')
const loginPayload = {userEmail: "venkatesh_e@gmail.com", userPassword: "Vision@1617"};
const orderPayload = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
let response;
test.beforeAll(async()=>{

    const apiContext = await request.newContext();
    const apiutils = new APIUtils(apiContext,loginPayload);
    response = await apiutils.createOrder(orderPayload);
  

})
test.beforeEach(async()=>{

})
test('API Integration',async({page})=>{
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    },response.token);

     const productName = "ZARA COAT 3";
       const email = "venkatesh_e@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator("//div[@class='card-body']");
    const cart = page.locator("//button[contains (@routerlink,'cart')]");
     await page.waitForLoadState('networkidle');

    await page.locator("//button[contains(@routerlink,'myorders')]").click();
    const orderNumbers = page.locator("//table//tbody/tr//th");
    await orderNumbers.first().waitFor({ state: 'visible' });
    const ordNum = await orderNumbers.count();
    for(let i=0;i<ordNum;++i){
        const id = await orderNumbers.nth(i).textContent();
        if(id === response.orderID){
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