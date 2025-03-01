import { expect, test } from "@playwright/test";

test.describe("all tests", () => {
  
  // test.use({storageState:"admin.json"})

  // test.beforeEach(async ({ page }) => {



  // });

  test("login with admin", async ({ page }) => {
   
  
    await page.goto('https://tahkeem.dev.is.sa/home')
     await page.getByRole('button', { name: 'تسجيل الدخول' }).click()
     await page.locator('label').filter({ hasText: 'مشرف' }).locator('div').nth(2).click()
      await page.getByRole('button', { name: 'استمر' }).click()
      await page.getByRole('textbox', { name: 'البريد الألكترونى' }).fill("admin@tahkeem.com")
      await page.getByRole('textbox', { name: 'كلمة المرور' }).fill("Changeme@123")
      await page.pause()
    await page.getByRole('button', { name: 'استمر' }).click()
     await page.waitForTimeout(3000)
     const dashboard=  page.getByText('الرئيسية')
     await expect(dashboard).toBeVisible()
     console.log(dashboard)
    //  await page.getByRole('textbox', { name: 'البريد الألكترونى' }).fill('example@es.com')
    //  await page.getByRole('button', { name: 'استمر' }).click()

      // await page.pause()
    
    //  await page.locator('[id="submit"]').nth[0].click()
    // await page.waitForTimeout(3000)
    //  await page.pause()

  });



});
