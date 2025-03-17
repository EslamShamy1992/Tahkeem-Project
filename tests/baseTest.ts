import { Page, test as base } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { AdminPage } from "../Pages/AdminPage";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { MemberShipRequestPage } from "../Pages/MemberShipRequestPage";
import { ServiceSeekerRequestPage } from "../Pages/ServiceSeekerRequestPage";

export class BaseTest {
  landingPage: LandingPage;
  loginPage: LoginPage;
  homePage: HomePage;
  adminPage: AdminPage;
  registerPage: RegistrationPage;
  membershipRequestPage: MemberShipRequestPage;
  serviceSeekerRequestPage: ServiceSeekerRequestPage;

  adminUserName: string;
  adminPassword: string;
  serviceSeekerUserName: string;
  serviceSeekerPassword: string;
  memberUserName: string;
  memberPassword: string;
  adminEmail: string;
  firstnameAr: string;
  fathernameAr: string;
  grandfathernameAr: string;
  familynameAr: string;
  password: string;
  fakeemail: string;
  country: string;
  nationality: string;
  city:string;
  path: string;

  constructor(page: Page) {
    this.landingPage = new LandingPage(page);
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.adminPage = new AdminPage(page);
    this.registerPage = new RegistrationPage(page);
    this.membershipRequestPage = new MemberShipRequestPage(page);
    this.serviceSeekerRequestPage = new ServiceSeekerRequestPage(page);

    // Admin Credentials
    this.adminUserName = "admin@tahkeem.com";
    this.adminPassword = "Changeme@123";
    this.adminEmail = "admin@example.com";

    // Service Seeker Credentials
    this.serviceSeekerUserName = "wikexek228@oziere.com";
    this.serviceSeekerPassword = "Eslam1992@";

    // Member Credentials
    this.memberUserName = "Larry.Ebert@gmail.com";
    this.memberPassword = "Eslam1992@";

    // Test Data
    this.firstnameAr = "إسلام";
    this.fathernameAr = "طارق";
    this.grandfathernameAr = "محمد";
    this.familynameAr = "الشامى";
    this.password = "Eslam1992@";
    this.fakeemail = faker.internet.email();
    this.country = "ألبانيا";
    this.nationality = "الجزائر";
    this.city='دورس'
    this.path = "photo.png";
  }
}

export function generateRandomNumbers(num: number): string {
  const prefix = "4";
  const randomNumber = faker.string.numeric(num);
  return prefix + randomNumber;
}

export const test = base.extend<{ baseTest: BaseTest }>({
  baseTest: async ({ page }, use) => {
    const baseTest = new BaseTest(page);
    await page.goto("/");
    await use(baseTest);
  },
});
