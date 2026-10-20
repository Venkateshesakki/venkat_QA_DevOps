const {test,expect,request} = require('@playwright/test')
const {APIUtils} = require('../Utils/APIUtils')
const loginPayload = {userEmail: "venkatesh_e@gmail.com", userPassword: "Vision@1617"};
const orderPayload = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
const fakepayload = {data: [], message: "No Orders"};
let response;
test.beforeAll(async()=>{

    const apiContext = await request.newContext();
    const apiutils = new APIUtils(apiContext,loginPayload);
    response = await apiutils.createOrder(orderPayload);
  

})

test('@API API Integration',async({page})=>{
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    },response.token);


    await page.goto("https://rahulshettyacademy.com/client");
     await page.waitForLoadState('networkidle');
     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route=>{
    const response = await page.request.fetch(route.request());
    let body = JSON.stringify(fakepayload);
    route.fulfill(
        {
            response,
            body
        }
    );

});
     
    await page.locator("//button[contains(@routerlink,'myorders')]").click();
 
        await page.screenshot({
    path: 'C:\\Users\\DELL\\Pictures\\Screenshots\\order-page.png',
    fullPage: true
});


});