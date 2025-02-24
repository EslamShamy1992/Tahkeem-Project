import { chromium } from 'playwright';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto("https://qacart.com/");
  await page.locator("#menuItem_1634680565427_1193").click();
  await page.getByRole("textbox", { name: "البريد الإلكتروني" }).fill("eslam_shamy@hotmail.com");
  await page.getByRole("textbox", { name: "كلمة المرور" }).fill("12345Sport@");
  await page.locator("#submitLogin").click();
  // Perform login actions
  
  // Wait for the page to load after login (e.g., dashboard)
//   await page.waitForSelector('h1.dashboard-title');

  // Save the authentication state (cookies, localStorage, etc.)
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}
