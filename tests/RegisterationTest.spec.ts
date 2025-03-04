import { expect, test } from "@playwright/test";
import { faker, fi } from "@faker-js/faker";
import { RegisterationPage } from "../Pages/RegisterationPage";
import { LandingPage } from "../Pages/LandingPage";
import { MemberShipRequestPage } from "../Pages/MemberShipRequestPage";

let registerpage: RegisterationPage;
let landingpage: LandingPage;
let membershiprequestpage:MemberShipRequestPage;
let firstnameAr: string;
let fathernameAr: string;
let grandfathernameAr: string;
let familynameAr: string;


test.describe("all tests", () => {
  function generateRandomNumbers(num): string {
    const prefix = "4";
    const randomNumber = faker.string.numeric(num);
    return prefix + randomNumber;
  }

  test.beforeEach(async ({ page }) => {
    registerpage = new RegisterationPage(page);
    landingpage = new LandingPage(page);
    membershiprequestpage= new MemberShipRequestPage(page)
     firstnameAr= "إسلام";
    fathernameAr= "طارق";
     grandfathernameAr= "محمد";
    familynameAr= "الشامى";
    await page.goto("/");
  });



  
  test.only("RegisterAsarbitrator", async ({ page }) => {
    await landingpage.goToRegisterPage();
    await registerpage.RegisterAsArbitrator(faker.internet.email(), generateRandomNumbers(7),
      generateRandomNumbers(5)
    );
    await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerpage.fillEnglishNames(faker.person.firstName(), faker.person.firstName(), faker.person.firstName(), faker.person.lastName());
    await registerpage.setPassword("Eslam1992@");
    await registerpage.confirmPasswordMatch("Eslam1992@");
    expect(membershiprequestpage.VerifymemberShipRequestTitleIsDisplayed).toBeTruthy()
    
  });
});
