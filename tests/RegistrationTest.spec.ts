import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { LandingPage } from "../Pages/LandingPage";
import { MemberShipRequestPage } from "../Pages/MemberShipRequestPage";

let registerPage: RegistrationPage;
let landingPage: LandingPage;
let membershipRequestPage: MemberShipRequestPage;
let firstnameAr: string;
let fathernameAr: string;
let grandfathernameAr: string;
let familynameAr: string;
let password: string;
let fakeEmail: string;


function generateRandomNumbers(length: number): string {
  return "4" + faker.string.numeric(length);
}

test.describe("Registration Test Cases", () => {
  test.beforeAll(() => {
    firstnameAr = "إسلام";
    fathernameAr = "طارق";
    grandfathernameAr = "محمد";
    familynameAr = "الشامى";
    password = "Eslam1992@";
  });

  test.beforeEach(async ({ page }) => {
   
    fakeEmail = faker.internet.email()

    registerPage = new RegistrationPage(page);
    landingPage = new LandingPage(page);
    membershipRequestPage = new MemberShipRequestPage(page);

    await page.goto("/");
  });

  test("Register as Member", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsMember(fakeEmail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.lastName()
    );
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);

    await expect(membershipRequestPage.VerifymemberShipRequestTitleIsDisplayed()).toBeTruthy();

    console.log(`Test executed with Member Email: ${fakeEmail}`);
  });

  test("Register as Service Seeker", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsServiceSeeker(fakeEmail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.lastName()
    );

    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);

    await expect(membershipRequestPage.VerifymemberShipRequestTitleIsDisplayed()).toBeTruthy();

    console.log(`Test executed with Service Seeker Email: ${fakeEmail}`);
  });
});
