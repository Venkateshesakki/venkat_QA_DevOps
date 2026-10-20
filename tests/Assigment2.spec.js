const {test,expect} = require("@playwright/test");


test('Event Management',async({page})=>{
  await page.goto("https://eventhub.rahulshettyacademy.com");
  await page.getByPlaceholder("you@email.com").fill("venkytester@gmail.com");
  await page.locator("//input[@id='password']").fill("Vision@1617");
  await page.locator("//button[contains(@id,'login')]").click();
  await page.locator("//a[@id='nav-events']").click();
  await page.locator("//a[@id='book-now-btn']").first().click();
  await page.locator("//input[@id='customerName']").fill("Venkatesh E");
  await page.locator("//input[@id='customer-email']").fill("venkytester@gmail.com");
  await page.locator("//input[@id='phone']").fill("6383972378");
  await page.locator("//button[@id='confirm-booking']").click();
  await page.locator("//a[@id='nav-bookings']").click();
  await page.locator("//button[contains(text(),'View Details')]").first().click();
  await expect(page.getByText("Booking Information")).toBeVisible();
  await page.locator("//button[@data-testid='check-refund-btn']").click();
  await expect(page.getByText("Single-ticket bookings qualify for a full refund.")).toBeVisible();
});