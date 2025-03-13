import { expect, test } from "@playwright/test";
import { faker} from "@faker-js/faker";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { LandingPage } from "../Pages/LandingPage";
import { MemberShipRequestPage } from "../Pages/MemberShipRequestPage";

let registerpage: RegistrationPage;
let landingpage: LandingPage;
let membershiprequestpage:MemberShipRequestPage;
let firstnameAr: string;
let fathernameAr: string;
let grandfathernameAr: string;
let familynameAr: string;
let password:string;
let fakeemail:string;
let country:string;
let nationality:string;
let path:string;


function generateRandomNumbers(num): string {
  const prefix = "4";
  const randomNumber = faker.string.numeric(num);
  return prefix + randomNumber;
}
test.describe("MemberShip Request TestCases", () => {

  test.beforeEach(async ({ page }) => {
    registerpage = new RegistrationPage(page);
    landingpage = new LandingPage(page);
    membershiprequestpage= new MemberShipRequestPage(page)
     firstnameAr= "إسلام";
    fathernameAr= "طارق";
     grandfathernameAr= "محمد";
    familynameAr= "الشامى";
    password='Eslam1992@';
    fakeemail=faker.internet.email()
    country='ألبانيا'
    nationality='الجزائر'
    path='date from to.png'
    
    await page.goto("/");
  });




  test("Submit MemberShip Application Form member user",async({page})=>{
     await landingpage.goToRegisterPage();
        await registerpage.RegisterAsMember(fakeemail, generateRandomNumbers(7),
          generateRandomNumbers(5)
        );
        await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
        await registerpage.fillEnglishNames(faker.person.firstName(), faker.person.firstName(), faker.person.firstName(), faker.person.lastName());
        await registerpage.setPassword(password);
        await registerpage.confirmPasswordMatch(password);
        await membershiprequestpage.fillMembershipRequestForm1(generateRandomNumbers(9),'date from to.png',faker.location.streetAddress(),
        faker.location.zipCode(),country,nationality);
        await membershiprequestpage.clickNextButton();
        expect(membershiprequestpage.VerifyStep2TitleIsDisplayed).toBeTruthy()
        await membershiprequestpage.fillmembershipForm2MemberUser(path)
        expect(landingpage.LandingpageTitleIsDisplayed).toBeTruthy()
        console.log(fakeemail)
      

  })
  test("submit membership form service seeker ",async({page})=>{

    await landingpage.goToRegisterPage();
    await registerpage.RegisterAsServiceSeeker(fakeemail, generateRandomNumbers(7),
      generateRandomNumbers(5)
    );
    await registerpage.fillArabicNames(firstnameAr, fathernameAr, grandfathernameAr, familynameAr);
    await registerpage.fillEnglishNames(faker.person.firstName(), faker.person.firstName(), faker.person.firstName(), faker.person.lastName());
    await registerpage.setPassword(password);
    await registerpage.confirmPasswordMatch(password);
    await membershiprequestpage.fillMembershipRequestForm1(generateRandomNumbers(9),'date from to.png',faker.location.streetAddress(),
    faker.location.zipCode(),country,nationality);
    await membershiprequestpage.clickNextButton();
    await membershiprequestpage.fillmembershipForm2ServiceSeeker(path)
    expect(landingpage.LandingpageTitleIsDisplayed).toBeTruthy()
    console.log(fakeemail)

  })
});