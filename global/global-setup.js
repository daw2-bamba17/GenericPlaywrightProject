//global setup.js
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  //await browser.close();
  
};
