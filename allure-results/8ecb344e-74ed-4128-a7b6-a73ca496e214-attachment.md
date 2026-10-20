# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicTest.spec.js >> @Web Browser Context Playwright test
- Location: tests\UIBasicTest.spec.js:3:1

# Error details

```
TimeoutError: locator.textContent: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//h4[@class=\'card-title\']').first()

```

# Test source

```ts
  1  | const {test,expect} = require("@playwright/test");
  2  | 
  3  | test('@Web Browser Context Playwright test',async ({browser})=>
  4  | {   
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  8  |     const userName = page.locator("//input[@id='username']");
  9  |     const password = page.locator("//input[@id='password']");
  10 |     const signIn = page.locator("//input[@id='signInBtn']");
  11 |     console.log(await page.title());
  12 |     await userName.fill("rahulshettyacademy");
  13 |     await password.fill("Learning@830$3mK");
  14 |     await signIn.click();
  15 |     console.log(await page.locator("//div[@style='display: block;']").textContent());
  16 |     const message = await page.locator("//div[@style='display: block;']");
  17 |     await expect(message).toContainText("Incorrect username/password.");
  18 |     await userName.fill("");
  19 |     await userName.fill("rahulshettyacademy");
  20 |     await password.fill("Learning@830$3mK2");
  21 |     await signIn.click();
> 22 |     console.log(await page.locator("//h4[@class='card-title']").first().textContent());
     |                                                                         ^ TimeoutError: locator.textContent: Timeout 10000ms exceeded.
  23 | 
  24 | });
  25 | 
  26 | 
  27 | test('@Web Page Context Playwright test',async ({page})=>
  28 | {
  29 |     
  30 |     await page.goto("https://google.com");
  31 |     console.log(await page.title());
  32 |     await expect(page).toHaveTitle("Google");
  33 | });
  34 | 
  35 | 
  36 | test('Assignment',async ({page})=>
  37 | {
  38 |     
  39 |     await page.goto("https://rahulshettyacademy.com/client");
  40 |     console.log(await page.title());
  41 |     const register = page.locator("//a[@class='text-reset']");
  42 |     const firstName = page.locator("//input[@id='firstName']");
  43 |     const lastName = page.locator("//input[@id='lastName']");
  44 |     const email = page.locator("//input[@id='userEmail']");
  45 |     const mobile = page.locator("//input[@id='userMobile']");
  46 |     const occupation = page.locator("//select[@formcontrolname='occupation']");
  47 |     const gender = page.locator("//input[@value='Male']");
  48 |     const password = page.locator("//input[@id='userPassword']");
  49 |     const confirmPassword = page.locator("//input[@id='confirmPassword']");
  50 |     const checkBox = page.locator("//input[@type='checkbox']");
  51 |     const submit = page.locator("//input[@value='Register']");
  52 |     const login = page.locator("//button[@class='btn btn-primary']");
  53 |     const message = page.locator("//h1[@class='headcolor']");
  54 |     const productName = page.locator("//div[@class='card-body']");
  55 |     const firstLogin = page.locator("//*[@id='login']");
  56 |     await register.click();
  57 |     await firstName.fill("venkatesh");
  58 |     await lastName.fill("Esakki");
  59 |     await email.fill("venkatesh_e@gmail.com");
  60 |     await mobile.fill("2786282799");
  61 |     await occupation.selectOption("3: Engineer");
  62 |     await gender.click();
  63 |     await password.fill("Vision@1617");
  64 |     await confirmPassword.fill("Vision@1617");
  65 |     await checkBox.click();
  66 |     await submit.click();
  67 |     console.log(await message.textContent());
  68 |     await login.click();
  69 |     await email.fill("venkatesh_e@gmail.com");
  70 |     await password.fill("Vision@1617");
  71 |     await firstLogin.click();
  72 |     console.log(await productName.first().textContent());
  73 |     await page.screenshot({
  74 |     path: 'C:\\Users\\DELL\\Pictures\\Screenshots\\product-page.png',
  75 |     fullPage: true
  76 | });
  77 | 
  78 | 
  79 | });
```