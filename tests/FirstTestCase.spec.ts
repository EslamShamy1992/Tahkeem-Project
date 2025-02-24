import { expect, test } from "@playwright/test";

test.describe("all tests", () => {
  
//   test.beforeEach(async ({ page }) => {
//     await page.goto("/");
//     await page.locator("#menuItem_1634680565427_1193").click();
//     await page.getByRole("textbox", { name: "البريد الإلكتروني" }).fill("eslam_shamy@hotmail.com");
//     await page.getByRole("textbox", { name: "كلمة المرور" }).fill("12345Sport@");
//     await page.locator("#submitLogin").click();
//   });

  test.only("login with valid Credentials", async ({ page }) => {
   
     //  await page.pause()
    await expect(page).toHaveURL('https://qacart.com/')
    //  await page.locator('[id="submit"]').nth[0].click()
    // await page.waitForTimeout(3000)
    //  await page.pause()
  

    // await expect(page).toHaveTitle(title,{timeout:60000})
  });
// });
// test("Login with valid cred2 ",async ({page})=>{
//     const title =await page.title();
//     await expect(page).toHaveTitle(title,{timeout:60000})

});
