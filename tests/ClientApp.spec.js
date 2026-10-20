const {test,expect} = require("@playwright/test");


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
    const productName = page.locator("//div[@class='card-body']//b");
    const firstLogin = page.locator("//*[@id='login']");
    await email.fill("venkatesh_e@gmail.com");
    await password.fill("Vision@1617");
    await firstLogin.click();
    await page.waitForLoadState('networkidle');
    const titles = await productName.allTextContents();
    console.log(titles);
 


});


test('UI dropdown',async ({page}) =>{


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropDown = page.locator("//select[@class='form-control']");
    const checkBox = page.locator("//input[@id='terms']");
    const link = page.locator("//a[contains(text(),'Free Access')]");
    await dropDown.selectOption("Consultant");
    await checkBox.click();
    await expect(checkBox).toBeChecked();
    await checkBox.uncheck();
    expect(await checkBox.isChecked()).toBeFalsy();
    await expect(link).toHaveAttribute("class","blinkingText");
    await page.pause();

});


test.only('child window',async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const link = page.locator("//a[contains(text(),'Free Access')]");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click()
    ])
    await newPage.waitForLoadState('domcontentloaded');
    const text = await newPage.locator("//p[contains(@class,'red')]").textContent();
    const arrayText = text.split("@");
    const email = arrayText[1].split(" ")[0];
    console.log(email);
    await page.locator("//input[@id='username']").fill(email);
    console.log(await page.locator("//input[@id='username']").inputValue());
    await page.pause();

});