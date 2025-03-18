import { expect } from "@playwright/test";
import { test } from "./baseTest";
import { faker } from "@faker-js/faker";
import { generateRandomNumbers } from "./baseTest";

test.describe("Registration Test Cases", () => {
  let landingPage, registerPage, membershipRequestPage, password;
  let fakeemail, firstnameAr, fathernameAr, grandfathernameAr, familynameAr;
  let firstNameEnglish,fatherNameEnglish,grandfatherNameEnglish,familyNameEnglish;

  test.beforeEach(async ({ baseTest }) => {
    ({ landingPage, registerPage, membershipRequestPage, password } = baseTest);
    ({ firstnameAr, fathernameAr, grandfathernameAr, familynameAr,fakeemail } = baseTest); 
    firstNameEnglish= faker.person.firstName()
    fatherNameEnglish= faker.person.firstName()
    grandfatherNameEnglish= faker.person.firstName()
    familyNameEnglish= faker.person.firstName()
  });

  test("Register as Member", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsMember(fakeemail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(firstNameEnglish,fatherNameEnglish, grandfatherNameEnglish, familyNameEnglish);
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password)
    expect(membershipRequestPage.VerifymemberShipRequestTitleIsDisplayed()).toBeTruthy();
    console.log(fakeemail);
  });

  test("Register as Service Seeker", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsServiceSeeker(fakeemail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames( firstNameEnglish, fatherNameEnglish,grandfatherNameEnglish,familyNameEnglish);
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);
    expect(membershipRequestPage.VerifymemberShipRequestTitleIsDisplayed()).toBeTruthy();
    console.log(fakeemail);
  });
});
