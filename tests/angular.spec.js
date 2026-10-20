const {test,expect} = require("@playwright/test");


test( 'unique locators',async({page}) =>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByRole("button",({name:'submit'})).click();
    var Boolean = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    console.log(Boolean);
    await page.getByRole("link",({name : 'shop'})).click();
    await page.locator("//app-card").filter({hasText :'Nokia Edge'}).getByRole("button",({name:'Add '})).click();

});