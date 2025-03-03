import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegisterationPage } from "../Pages/RegisterationPage";
import { LandingPage } from "../Pages/LandingPage";

let registerpage: RegisterationPage;
let landingpage:LandingPage;
test.describe("all tests", () => {
  function generatesaudinumber(num): string {
    const prefix = "4";
    const randomNumber = faker.string.numeric(num);
    return prefix + randomNumber;
  }

  test.beforeEach(async ({ page }) => {
   registerpage= new RegisterationPage(page)
   landingpage=new LandingPage(page)
    await page.goto("/");
  });

  test.only("RegisterAsarbitrator", async ({ page }) => {
    await landingpage.goToRegisterPage()
    await registerpage.RegisterAsArbitrator(
      faker.internet.email(),
      generatesaudinumber(7),generatesaudinumber(5)
    );
  
    await page.locator('#formly_20_input_firstNameAr_0').fill('إسلام')

  
// await page.pause()

    expect(registerpage.LogoIsVisible()).toBeTruthy();
  });
});
