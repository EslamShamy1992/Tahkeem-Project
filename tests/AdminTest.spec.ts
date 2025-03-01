import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { AdminPage } from "../Pages/AdminPage";

let adminpage: AdminPage;
test.describe("all tests", () => {
  function generatesaudinumber(): string {
    const prefix = "4";
    const randomNumber = faker.string.numeric(7);
    return prefix + randomNumber;
  }

  test.beforeEach(async ({ page }) => {
    adminpage = new AdminPage(page);
    await page.goto("/auth/account-type/register");
  });

  test.only("RegisterAsarbitrator", async ({ page }) => {
    await adminpage.RegisterAsArbitrator(
      faker.internet.email(),
      generatesaudinumber()
    );
    expect(adminpage.LogoIsVisible()).toBeTruthy();
  });
});


