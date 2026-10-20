const {After, Before,BeforeStep,AfterStep, Status,
  setDefaultTimeout} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../../PageObject/POManager');
setDefaultTimeout(60 * 1000);
Before(async function () {
   this.browser = await chromium.launch({
    headless: false
  });

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();

  this.poManager = new POManager(this.page);
});

After(async function(){
  console.log("Scenario execution completed");
})

BeforeStep( function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep( async function ({result}) {
  
  if (result.status === Status.FAILED && this.page) {
    await this.page.screenshot({path: 'screenshot.png'});
  }
});