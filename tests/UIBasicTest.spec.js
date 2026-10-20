const {test,expect} = require("@playwright/test");

test('@Web Browser Context Playwright test',async ({browser})=>
{   
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("//input[@id='username']");
    const password = page.locator("//input[@id='password']");
    const signIn = page.locator("//input[@id='signInBtn']");
    console.log(await page.title());
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK");
    await signIn.click();
    console.log(await page.locator("//div[@style='display: block;']").textContent());
    const message = await page.locator("//div[@style='display: block;']");
    await expect(message).toContainText("Incorrect username/password.");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("//h4[@class='card-title']").first().textContent());

});


test('@Web Page Context Playwright test',async ({page})=>
{
    
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});


test('Assignment',async ({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    const register = page.locator("//a[@class='text-reset']");
    const firstName = page.locator("//input[@id='firstName']");
    const lastName = page.locator("//input[@id='lastName']");
    const email = page.locator("//input[@id='userEmail']");
    const mobile = page.locator("//input[@id='userMobile']");
    const occupation = page.locator("//select[@formcontrolname='occupation']");
    const gender = page.locator("//input[@value='Male']");
    const password = page.locator("//input[@id='userPassword']");
    const confirmPassword = page.locator("//input[@id='confirmPassword']");
    const checkBox = page.locator("//input[@type='checkbox']");
    const submit = page.locator("//input[@value='Register']");
    const login = page.locator("//button[@class='btn btn-primary']");
    const message = page.locator("//h1[@class='headcolor']");
    const productName = page.locator("//div[@class='card-body']");
    const firstLogin = page.locator("//*[@id='login']");
    await register.click();
    await firstName.fill("venkatesh");
    await lastName.fill("Esakki");
    await email.fill("venkatesh_e@gmail.com");
    await mobile.fill("2786282799");
    await occupation.selectOption("3: Engineer");
    await gender.click();
    await password.fill("Vision@1617");
    await confirmPassword.fill("Vision@1617");
    await checkBox.click();
    await submit.click();
    console.log(await message.textContent());
    await login.click();
    await email.fill("venkatesh_e@gmail.com");
    await password.fill("Vision@1617");
    await firstLogin.click();
    console.log(await productName.first().textContent());
    await page.screenshot({
    path: 'C:\\Users\\DELL\\Pictures\\Screenshots\\product-page.png',
    fullPage: true
});


});