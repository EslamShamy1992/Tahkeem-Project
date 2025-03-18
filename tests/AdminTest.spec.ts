import { _baseTest, expect } from "@playwright/test";
import { BaseTest, test } from "./baseTest";
import { faker } from "@faker-js/faker";

test.describe("Admin Test Cases", () => {
  let landingPage, loginPage, homePage, adminPage;
  let adminUserName, adminPassword;
  let adminName, adminEmail, searchAdminNameAr,searchAdminNameEn, searchAdminEmail;

  test.beforeEach(async ({ baseTest }) => {
    ({ landingPage, loginPage, homePage, adminPage, adminUserName, adminPassword } = baseTest);
    adminName = faker.person.firstName();
    adminEmail = faker.internet.email();
    searchAdminNameAr = "إسلام الشامى";
    searchAdminNameEn='eslam';
    searchAdminEmail = "eslamelshamy1992@gmail.com";
  });

  test("Verify adding new admin with English name", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.addAdmin(adminName, adminEmail);
    expect(adminPage.confirmationmessageIsDisplayed()).toBeTruthy();
  });

  test("Verify adding new admin with Arabic name", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.addAdmin("إسلام الشامي", adminEmail);
    expect(adminPage.confirmationmessageIsDisplayed()).toBeTruthy();
  });

  test("Verify editing admin user", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.viewLastUserDetails();
    await adminPage.editAdmin(adminName, adminEmail);
    expect(adminPage.confirmationmessageIsDisplayed()).toBeTruthy();
  });

  test("Verify searching by Admin Name arabic", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.searchByAdminName(searchAdminNameAr);

    expect(adminPage.verifyNameArabicInResults).toBeTruthy();
  });
  test("Verify searching by Admin Name English", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.searchByAdminName(searchAdminNameEn);

    await adminPage.page.pause()
    expect(adminPage.verifyNameEnglishInResults).toBeTruthy();
  });

  test("Verify searching by Admin Email", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.searchByAdminEmail(searchAdminEmail);
    await expect(adminPage.verifyEmailInResults).toBeTruthy()
  });

  test("Verify disabling admin account", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.disableAdminAccount();

    expect(adminPage.confirmationmessageIsDisplayed()).toBeTruthy();
  });
});
