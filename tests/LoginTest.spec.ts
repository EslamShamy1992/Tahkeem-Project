import { expect } from "@playwright/test";
import { test } from "./baseTest";

test.describe("Login TestCases", () => {
  let landingPage, loginPage, homePage;
  let adminUserName, adminPassword;
  let serviceSeekerUserName, serviceSeekerPassword;
  let memberUserName, memberPassword;

  test.beforeEach(async ({ baseTest }) => {
    ({ landingPage, loginPage, homePage, adminUserName, adminPassword, serviceSeekerUserName, serviceSeekerPassword, memberUserName, memberPassword } = baseTest);
  });

  test("Login as admin", async () => {
    await landingPage.goToLoginPage();
    await loginPage.loginAsAdmin(adminUserName, adminPassword);
    expect(homePage.logoIsVisible()).toBeTruthy();
  });

  test("Login as service seeker", async () => {
    await landingPage.goToLoginPage();
    await loginPage.LoginAsServiceSeeker(serviceSeekerUserName, serviceSeekerPassword);
    expect(homePage.logoIsVisible()).toBeTruthy();
  });

  test("Login as member", async () => {
    await landingPage.goToLoginPage();
    await loginPage.LoginAsMember(memberUserName, memberPassword);
    expect(homePage.logoIsVisible()).toBeTruthy();
  });
});

