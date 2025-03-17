import { expect } from "@playwright/test";
import { test } from "./baseTest";
import { faker } from "@faker-js/faker";

test.describe("Admin Test Cases", () => {
  let landingPage, loginPage, homePage, adminPage;
  let adminUserName, adminPassword;
  let adminName, adminEmail, searchAdminName, searchAdminEmail;

  test.beforeEach(async ({ baseTest }) => {
    ({ landingPage, loginPage, homePage, adminPage, adminUserName, adminPassword } = baseTest);

    adminName = faker.person.firstName();
    adminEmail = faker.internet.email();
    searchAdminName = "elshamy";
    searchAdminEmail = "eslameslamelshamy1992@gmail.com";
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

  test("Verify searching by Admin Name", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.searchByAdminName(searchAdminName);
    await adminPage.verifyEmailInResults(searchAdminName);
  });

  test("Verify searching by Admin Email", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.searchByAdminEmail(searchAdminEmail);
    await adminPage.verifyEmailInResults(searchAdminEmail);
  });

  test("Verify disabling admin account", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    await homePage.navigateToManageAdminPage();
    await adminPage.disableAdminAccount();

    expect(adminPage.confirmationmessageIsDisplayed()).toBeTruthy();
  });
});
