import { expect } from "@playwright/test";
import { test } from "./baseTest";
import { faker } from "@faker-js/faker";
import { generateRandomNumbers } from "./baseTest";

test.describe("Registration Test Cases", () => {
  let landingPage, registerPage, membershipRequestPage, password;
  let fakeemail, firstnameAr, fathernameAr, grandfathernameAr, familynameAr;

  test.beforeEach(async ({ baseTest }) => {
    ({ landingPage, registerPage, membershipRequestPage, password } = baseTest);
    ({ firstnameAr, fathernameAr, grandfathernameAr, familynameAr } = baseTest); 
    fakeemail=faker.internet.email();
  });

  test("Register as Member", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsMember(fakeemail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.lastName()
    );
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);
  

    expect(membershipRequestPage.VerifymemberShipRequestTitleIsDisplayed()).toBeTruthy();

    console.log(`Test executed with Member Email: ${fakeemail}`);
  });

  test("Register as Service Seeker", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsServiceSeeker(fakeemail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.lastName()
    );
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);
    expect(membershipRequestPage.VerifymemberShipRequestTitleIsDisplayed()).toBeTruthy();


    console.log(`Test executed with Service Seeker Email: ${fakeemail}`);
  });
});
