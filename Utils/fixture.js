const base = require('@playwright/test')
const { APIUtils } = require('./APIUtils')
const { request } = require('@playwright/test')
const loginPayload = { userEmail: "venkatesh_e@gmail.com", userPassword: "Vision@1617" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };

exports.customTest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/client");
        const username = page.locator("//input[@id='userEmail']");
        const password = page.locator("//input[@id='userPassword']");
        const signIn = page.locator("//input[@id='login']");
        await username.fill("venkatesh_e@gmail.com");
        await password.fill("Vision@1617");
        await signIn.click();
        await page.waitForLoadState('networkidle');
        await use(page);
    },
    createOrder: async ({ }, use) => {
        const apiContext = await request.newContext();
        const apiutils = new APIUtils(apiContext, loginPayload);
        const response = await apiutils.createOrder(orderPayload);
        await use(response);
    }

});
