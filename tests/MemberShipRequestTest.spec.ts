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


test.describe("MemberShip Request TestCases", () => {
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
    await page.goto("/");
  });




  test.only("Submit MemberShip Application Form",async({page})=>{
     await landingpage.goToRegisterPage();
        await registerpage.RegisterAsArbitrator(faker.internet.email(), generateRandomNumbers(7),
          generateRandomNumbers(5)
        );
        await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
        await registerpage.fillEnglishNames(faker.person.firstName(), faker.person.firstName(), faker.person.firstName(), faker.person.lastName());
        await registerpage.setPassword(password);
        await registerpage.confirmPasswordMatch(password);
        await membershiprequestpage.fillMembershipRequestForm1(generateRandomNumbers(9),'date from to.png',faker.location.streetAddress(),
        faker.location.zipCode(),'ألبانيا','الجزائر');
        await membershiprequestpage.clickNextButton();
        expect(membershiprequestpage.VerifyStep2TitleIsDisplayed).toBeTruthy()
        await membershiprequestpage.fillmembershipForm2('date from to.png')
        expect(landingpage.LandingpageTitleIsDisplayed).toBeTruthy()
      

  })
});