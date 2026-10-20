const {test,expect} = require('@playwright/test')
test.describe.configure({mode:'parallel'});
test ('popup validations',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("//input[@id='displayed-text']")).toBeVisible();
    await page.locator("//input[@id='hide-textbox']").click();
    await expect(page.locator("//input[@id='displayed-text']")).toBeHidden();
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("//input[@id='confirmbtn']").click();
    await page.locator("//button[@id='mousehover']").hover();
    const frames = page.frameLocator("//iframe[@id='courses-iframe']");
    await frames.locator("a:has-text('All Access plan'):visible").click();
    const text = await frames.locator(".text h2").textContent();
    console.log(text.split(" ")[1]);
});

test('visuals testing',async({page}) =>{

    await page.goto("https://www.flightaware.com/");
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})