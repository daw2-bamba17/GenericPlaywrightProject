//global setup.js
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  /*  await page.goto('https://medicalmeetingpoint.test.basetis.com/nova/login');
    await page.locator('input[name="email"]').fill('userTestBrazil@test.com');
    await page.locator('input[name="password"]').fill('12345678');
    await page.locator('text=Login').click();
    await page.goto('https://medicalmeetingpoint.test.basetis.com/nova/resources/multimedia');
  */

  // the global french user Setup
  // await page.goto('https://medicalmeetingpoint.test.basetis.com/en');
  // await page.locator('text=User This is not an Email >> [placeholder="Enter your email"]').fill('usertestfrance@test.com');
  // await page.locator('[placeholder="Password"]').fill('12345678');
  //await page.locator('button:has-text("Log in")').click();
  // await page.goto('https://medicalmeetingpoint.test.basetis.com/en/home');

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  //await browser.close();
  
};