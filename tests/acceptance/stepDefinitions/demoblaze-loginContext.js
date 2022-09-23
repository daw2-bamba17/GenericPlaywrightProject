const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect, page, goto } = require("@playwright/test")

// //launch url
const url = 'https://preprod.medicalmeetingpoint.com/nova/resources/prepetitions'

const homepageElement = 'div:has-text("Welcome Back! Email Address Password Remember Me Forgot Your Password? Login Reg")'
const emailInput = 'input[name="email"]';
const passInput = 'input[name="password"]';
const loginButton = 'text=Login';

  Given('Ashimu has an active account', async () => {
    await page.goto(url)
    const locator = await page.locator(homepageElement)
    await expect(locator).toBeVisible()
  });

  When('he sends his valid credentials', async () => {

    await page.locator(emailInput).fill('ashimu.bamba@basetis.com');
    await page.locator(passInput).fill('Aa12345678');
    await page.locator(loginButton).click();
  });

  Then('he should have access to manage his account', async () => {

  });