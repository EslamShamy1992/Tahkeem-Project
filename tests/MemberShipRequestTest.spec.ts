import { expect } from "@playwright/test";
import {test} from "./baseTest"
import { faker } from "@faker-js/faker";
import { generateRandomNumbers } from "./baseTest";

let registerpage, landingpage, membershiprequestpage;
let firstnameAr, fathernameAr, grandfathernameAr, familynameAr;
let password, fakeemail, country, nationality, path;

test.describe("MemberShip Request TestCases", () => {
  test.beforeEach(async ({ baseTest }) => {
    registerpage = baseTest.registerPage;
    landingpage = baseTest.landingPage;
    membershiprequestpage = baseTest.membershipRequestPage;
  
    firstnameAr = baseTest.firstnameAr;
    fathernameAr = baseTest.fathernameAr;
    grandfathernameAr = baseTest.grandfathernameAr;
    familynameAr = baseTest.familynameAr;
    password = baseTest.password;
    country = baseTest.country;
    nationality = baseTest.nationality;
  
    fakeemail = faker.internet.email();
    path = "date from to.png"; 
  });
  

  test("Submit MemberShip Application Form member user", async () => {
    await landingpage.goToRegisterPage();
    await registerpage.RegisterAsMember(
      fakeemail,
      generateRandomNumbers(7),
      generateRandomNumbers(5)
    );
    await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerpage.fillEnglishNames(
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.lastName()
    );
    await registerpage.setPassword(password);
    await registerpage.confirmPasswordMatch(password);
    await membershiprequestpage.fillMembershipRequestForm1(
      generateRandomNumbers(9),
      path,
      faker.location.streetAddress(),
      faker.location.zipCode(),
      country,
      nationality
    );
    await membershiprequestpage.clickNextButton();
    expect(await membershiprequestpage.VerifyStep2TitleIsDisplayed()).toBeTruthy();
    await membershiprequestpage.fillmembershipForm2MemberUser(path);
    expect(landingpage.LandingpageTitleIsDisplayed()).toBeTruthy();
    console.log(fakeemail);
  });

  test("Submit membership form service seeker", async () => {
    await landingpage.goToRegisterPage();
    await registerpage.RegisterAsServiceSeeker(
      fakeemail,
      generateRandomNumbers(7),
      generateRandomNumbers(5)
    );
    await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerpage.fillEnglishNames(
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.lastName()
    );
    await registerpage.setPassword(password);
    await registerpage.confirmPasswordMatch(password);
    await membershiprequestpage.fillMembershipRequestForm1(
      generateRandomNumbers(9),
      path,
      faker.location.streetAddress(),
      faker.location.zipCode(),
      country,
      nationality
    );
    await membershiprequestpage.clickNextButton();
    await membershiprequestpage.fillmembershipForm2ServiceSeeker(path);
    expect( landingpage.LandingpageTitleIsDisplayed()).toBeTruthy();
    console.log(fakeemail);
  });
});
