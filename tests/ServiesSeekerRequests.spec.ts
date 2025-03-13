import { expect, test } from "@playwright/test";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { ServiceSeekerRequestPage } from "../Pages/ServiceSeekerRequestPage";

let landingpage:LandingPage;
let loginpage:LoginPage;
let homepage:HomePage;
let serviceseekerrequestpage:ServiceSeekerRequestPage;
let serviceSeekerUserName:string;
let serviceSeekerPassword:string;
test.describe("Admin TestCases", () => {
  test.beforeEach(async ({ page }) => {
   landingpage=new LandingPage(page)
   loginpage= new LoginPage(page)
   homepage=new HomePage(page)
   serviceseekerrequestpage=new ServiceSeekerRequestPage(page);
   serviceSeekerUserName='wikexek228@oziere.com'
   serviceSeekerPassword='Eslam1992@'
    await page.goto("/");
  });

  test.only("create institutional arbitration Request",async({page})=>{

     await landingpage.goToLoginPage();
        await loginpage.LoginAsServiceSeeker(serviceSeekerUserName,serviceSeekerPassword);
        await homepage.goToMyRequestsPage()
        await serviceseekerrequestpage.clickOncreateButton()
        await serviceseekerrequestpage.clickOnInstituationalArbitration()
        await serviceseekerrequestpage.clickOnSubmitButton()
        await page.pause()
      
  })


});