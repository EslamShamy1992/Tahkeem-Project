import { expect, test } from "@playwright/test";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { AdminPage } from "../Pages/AdminPage";
import { faker } from "@faker-js/faker";

let landingpage: LandingPage;
let loginpage: LoginPage;
let homepage: HomePage;
let adminpage:AdminPage;


test.beforeEach(async ({ page }) => {
  landingpage = new LandingPage(page);
  loginpage = new LoginPage(page);
  homepage = new HomePage(page);
  adminpage= new AdminPage(page)
  await page.goto("/");
});

test("verify add new admin", async ({ page }) => {
  await landingpage.goToLoginPage();
  await loginpage.loginAsAdmin("admin@tahkeem.com", "Changeme@123");
  await page.waitForTimeout(3000)
  await homepage.navigateToManageAdminPage();
 await adminpage.addAdmin(faker.person.fullName(),faker.internet.email())
   expect(adminpage.confirmationmessageIsDisplayed).toBeTruthy()

});
