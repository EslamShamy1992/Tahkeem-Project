import { expect, test } from "@playwright/test";

test.describe("all tests", () => {
  
  test.use({storageState:"admin.json"})

//   test.beforeEach(async ({ page }) => {

// await page.goto("https://qacart.com/");

//   });

  test("login with admin", async ({ page }) => {
   
    const baseurl=  page.url();
    await expect(page).toHaveURL(baseurl)
    //  await page.locator('[id="submit"]').nth[0].click()
    // await page.waitForTimeout(3000)
    //  await page.pause(

    // await expect(page).toHaveTitle(title,{timeout:60000})
  });



});
