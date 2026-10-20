const {test,expect} = require("@playwright/test");


test('Event Management',async({page})=>{
   const eventTitle = `Test Event ${Date.now()}`;
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("venkytester@gmail.com");
    await page.locator("//input[@id='password']").fill("Vision@1617");
    await page.locator("//button[contains(@id,'login')]").click();
    await page.locator("//button[contains(text(),'Admin')]").click();
    await page.getByRole("link",{name:'Manage Events'}).first().click();
    await page.getByPlaceholder("Event title").fill(eventTitle);
    await page.getByPlaceholder("Describe the event…").fill("Hey! join the event for fun");
    await page.getByLabel("Category").selectOption("Festival");
    await page.getByLabel("City").fill("Chennai");
    await page.getByLabel("Venue").fill("Thoraipakkam");
    await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');
    await page.locator("//input[@id='price-($)']").fill("100");
    await page.locator("//input[@id='total-seats']").fill("500");
    await page.locator("//button[@type='submit']").click();
    await expect(page.getByText("Event created!")).toBeVisible();
    await page.locator("//a[@id='nav-events']").click();
    await page.locator("//div//article[@id='event-card']").first().isVisible();
    const eventCard = await page.locator("//div//article[@id='event-card']").filter({hasText:eventTitle}).innerText();
    await expect(eventCard).toContainText(eventTitle);
});