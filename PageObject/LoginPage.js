class LoginPage{

   constructor(page){
    this.page = page;
    this.userName = page.locator("//input[@id='userEmail']");
    this.password = page.locator("//input[@id='userPassword']");
    this.signIn =  page.locator("//input[@id='login']");

   }

   async goTo(){

    await this.page.goto("https://rahulshettyacademy.com/client");
   }

   async validLogin(userName,password){
    
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signIn.click();
     await this.page.waitForLoadState('networkidle');
   }

}

module.exports = { LoginPage };