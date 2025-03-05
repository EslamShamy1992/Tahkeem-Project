import { expect, test } from "@playwright/test";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";

let landingpage:LandingPage;
let loginpage:LoginPage;
let homepage:HomePage;



test.describe("Admin TestCases", () => {
  test.beforeEach(async ({ page }) => {
   landingpage=new LandingPage(page)
   loginpage= new LoginPage(page)
   homepage=new HomePage(page)
    await page.goto("/");
  });


  test("login as admin",async({page})=>{
   
   await landingpage.goToLoginPage()
    await loginpage.loginAsAdmin("admin@tahkeem.com","Changeme@123")
     expect(homepage.logoIsVisible).toBeTruthy()
     
    
 
  })
});