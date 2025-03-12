import { expect, test } from "@playwright/test";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";

let landingpage:LandingPage;
let loginpage:LoginPage;
let homepage:HomePage;
let adminUserName:string;
let adminPassword:string;
let serviceSeekerUserName:string;
let serviceSeekerPassword:string;
let MemberUsername:string;
let MemberPassword:string;

test.describe("Admin TestCases", () => {
  test.beforeEach(async ({ page }) => {
   landingpage=new LandingPage(page)
   loginpage= new LoginPage(page)
   homepage=new HomePage(page)
   adminUserName='admin@tahkeem.com'
   adminPassword='Changeme@123'
   serviceSeekerUserName='wikexek228@oziere.com'
   serviceSeekerPassword='Eslam1992@'
   MemberUsername='Larry.Ebert@gmail.com'
   MemberPassword='Eslam1992@'
    await page.goto("/");
  });


  test("login as admin",async({page})=>{
   
   await landingpage.goToLoginPage()
    await loginpage.loginAsAdmin(adminUserName,adminPassword)
     expect(homepage.logoIsVisible).toBeTruthy()
     
    
 
  })

  test("login as service seeker",async({page})=>{


    await landingpage.goToLoginPage();
    await loginpage.LoginAsServiceSeeker(serviceSeekerUserName,serviceSeekerPassword)
    expect(homepage.logoIsVisible).toBeTruthy()
  

    
  })
  test("Login as member",async({page})=>{

    await landingpage.goToLoginPage()
    await loginpage.LoginAsMember(MemberUsername,MemberPassword)
    expect(homepage.logoIsVisible).toBeTruthy()
    
  })
});