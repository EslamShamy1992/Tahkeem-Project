import { expect, test } from "@playwright/test";
import { faker} from "@faker-js/faker";
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
let password:string;
let fakeemail:string;


test.describe("Registration TestCases", () => {
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
    password='Eslam1992@';
    fakeemail=faker.internet.email()
    await page.goto("/");
  });



  
  test("RegisterAsMember", async ({ page }) => {
    await landingpage.goToRegisterPage();
    await registerpage.RegisterAsMember(fakeemail, generateRandomNumbers(7),
      generateRandomNumbers(5)
    );
    await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerpage.fillEnglishNames(faker.person.firstName(), faker.person.firstName(), faker.person.firstName(), faker.person.lastName());
    await registerpage.setPassword(password);
    await registerpage.confirmPasswordMatch(password);
    expect(membershiprequestpage.VerifymemberShipRequestTitleIsDisplayed).toBeTruthy()
    console.log(fakeemail)
    
  });

  test.only("Register as Service Seeker",async({page})=>{
    await landingpage.goToRegisterPage()
    await registerpage.RegisterAsServiceSeeker(fakeemail, generateRandomNumbers(7),
    generateRandomNumbers(5));
    await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerpage.fillEnglishNames(faker.person.firstName(), faker.person.firstName(), faker.person.firstName(), faker.person.lastName());

    await registerpage.setPassword(password);
    await registerpage.confirmPasswordMatch(password);
    await expect(membershiprequestpage.VerifymemberShipRequestTitleIsDisplayed).toBeTruthy()
    console.log(fakeemail)


  })





});
