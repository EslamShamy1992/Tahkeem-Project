import { chromium } from 'playwright';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://qacart.com/");
  await page.locator("#menuItem_1634680565427_1193").click();
  await page.getByRole("textbox", { name: "البريد الإلكتروني" }).fill("eslam_shamy@hotmail.com");
  await page.getByRole("textbox", { name: "كلمة المرور" }).fill("12345Sport@");
 
  // Save the authentication state (cookies, localStorage, etc.)
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}
// 2. Create the Global Setup File
// Your global setup file will log in and save the session state. Here's how you can structure your global-setup.ts file.

// global-setup.ts:

// typescript
// Copy
// import { chromium } from 'playwright';

// export default async function globalSetup() {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Navigate to the login page
//   await page.goto('https://example.com/login');

//   // Perform login actions
//   await page.fill('#username', 'testuser');
//   await page.fill('#password', 'password123');
//   await page.click('button[type="submit"]');

//   // Wait for the page to load after login (e.g., dashboard)
//   await page.waitForSelector('h1.dashboard-title');

//   // Save the authentication state (cookies, localStorage, etc.)
//   await page.context().storageState({ path: 'storageState.json' });

//   await browser.close();
// }
// 3. Update Playwright Config to Use Global Setup
// In the playwright.config.ts file, specify the path to your global-setup.ts file and the location of the storage state file.

// playwright.config.ts:

// typescript
// Copy
// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   globalSetup: './global-setup.ts', // Path to global setup file
//   use: {
//     baseURL: 'https://example.com', // Define your base URL here
//     storageState: 'storageState.json', // Use the saved session state from global setup
//   },
// });
// 4. Manually Run the Global Setup
// Since npx playwright test does not run globalSetup automatically, you need to manually run your global-setup.ts script once using tsx:

// bash
// Copy
// npx tsx global-setup.ts
// This will:

// Launch the browser.
// Perform the login.
// Save the session (cookies, localStorage, etc.) to a file called storageState.json.
// 5. Write Tests with the Stored Authentication State
// Now, in your tests, you don't need to log in again. You just load the saved session data from storageState.json.

// login.spec.ts:

// typescript
// Copy
// import { test, expect } from '@playwright/test';
// import { DashboardPage } from '../pages/DashboardPage';

// test('Dashboard should load after login', async ({ page }) => {
//   // Storage state is automatically loaded via playwright.config.ts

//   const dashboardPage = new DashboardPage(page);
//   const title = await dashboardPage.getDashboardTitle();
//   expect(title).toBe('Welcome to Your Dashboard');
// });
// 6. Running the Tests
// Once the global setup has successfully run and the storageState.json file is generated, you can now run your tests using:

// bash
// Copy
// npx playwright test
// This will use the storageState.json file and automatically handle authentication, so you don’t need to log in each time.