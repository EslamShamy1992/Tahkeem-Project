import { expect } from "@playwright/test";
import {test} from "./baseTest"
import { faker } from "@faker-js/faker";
import { generateRandomNumbers } from "./baseTest";

test.describe("MemberShip Request TestCases", () => {

let landingPage, registerPage, membershipRequestPage, password;
let fakeemail, firstnameAr, fathernameAr, grandfathernameAr, familynameAr;
let firstNameEnglish,fatherNameEnglish,grandfatherNameEnglish,familyNameEnglish,path
let country,nationality,address,postal;
  test.beforeEach(async ({ baseTest }) => {
    ({ landingPage, registerPage, membershipRequestPage, password } = baseTest);
    ({ firstnameAr, fathernameAr, grandfathernameAr, familynameAr,fakeemail,path,country,nationality } = baseTest); 
    firstNameEnglish= faker.person.firstName()
    fatherNameEnglish= faker.person.firstName()
    grandfatherNameEnglish= faker.person.firstName()
    familyNameEnglish= faker.person.firstName()
    address=faker.location.streetAddress()
    postal=faker.location.zipCode()
  });
  

  test("Submit MemberShip Application Form member user", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsMember(fakeemail, generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(firstNameEnglish,fatherNameEnglish, grandfatherNameEnglish, familyNameEnglish );
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);
    await membershipRequestPage.fillMembershipRequestForm1(generateRandomNumbers(9), path,address,postal,country, nationality);
    await membershipRequestPage.clickNextButton();
    expect(membershipRequestPage.VerifyStep2TitleIsDisplayed()).toBeTruthy();
    await membershipRequestPage.fillmembershipForm2MemberUser(path);
    expect(landingPage.LandingpageTitleIsDisplayed()).toBeTruthy();
    console.log(fakeemail);
  });

  test("Submit membership form service seeker", async () => {
    await landingPage.goToRegisterPage();
    await registerPage.RegisterAsServiceSeeker( fakeemail,generateRandomNumbers(7), generateRandomNumbers(5));
    await registerPage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerPage.fillEnglishNames(firstNameEnglish,fatherNameEnglish, grandfatherNameEnglish, familyNameEnglish );
    await registerPage.setPassword(password);
    await registerPage.confirmPasswordMatch(password);
    await membershipRequestPage.fillMembershipRequestForm1( generateRandomNumbers(9),path,address,postal,country, nationality );
    await membershipRequestPage.clickNextButton();
    await membershipRequestPage.fillmembershipForm2ServiceSeeker(path);
    expect(landingPage.LandingpageTitleIsDisplayed()).toBeTruthy();
    console.log(fakeemail);
  });
});
