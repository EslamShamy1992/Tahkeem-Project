import { expect } from "@playwright/test";
import { BaseTest, test } from "./baseTest";
import { generateRandomNumbers } from "./baseTest";
import { fa, faker, Faker } from "@faker-js/faker";
test.describe("Service Seeker Test Cases", () => {
  let landingPage, loginPage, homePage, serviceSeekerRequestPage;
  let serviceSeekerUserName, serviceSeekerPassword,path;
  let id,passport,resident;
  let firstnameAr,familynameAr,fathernameAr,grandfathernameAr;
  let firstNameEnglish, fatherNameEnglish,grandfatherNameEnglish,familyNameEnglish;
  let fakeemail,phone,profession,address,postal,country,nationality,city,governorate;
   
  test.beforeEach(async ({ baseTest }) => {
    ({ 
      landingPage, 
      loginPage, 
      homePage, 
      serviceSeekerRequestPage, 
      serviceSeekerUserName, fakeemail,country,nationality,city,
      serviceSeekerPassword ,path,firstnameAr,fathernameAr,grandfathernameAr,familynameAr
    } = baseTest);
    id=0;
    passport=1;
    resident=2;
    firstNameEnglish= faker.person.firstName()
    fatherNameEnglish= faker.person.firstName()
    grandfatherNameEnglish= faker.person.firstName()
    familyNameEnglish= faker.person.firstName()
    phone=generateRandomNumbers(7)
    profession=faker.person.jobTitle();
    address=faker.location.streetAddress()
    postal=faker.location.zipCode()
    governorate=faker.location.city()
    
  });

  test("Create Institutional Arbitration Request", async () => {
    await landingPage.goToLoginPage();
    await loginPage.LoginAsServiceSeeker(serviceSeekerUserName, serviceSeekerPassword);
    await homePage.goToMyRequestsPage();
    await serviceSeekerRequestPage.clickOncreateButton();
    await serviceSeekerRequestPage.clickOnInstituationalArbitration();
    await serviceSeekerRequestPage.clickOnSubmitButton();
    await serviceSeekerRequestPage.selectIdentity1(id,generateRandomNumbers(9),path)
    await serviceSeekerRequestPage.fillArabicNames(firstnameAr,fathernameAr,grandfathernameAr,familynameAr);
    await serviceSeekerRequestPage.fillEnglishNames(firstNameEnglish, fatherNameEnglish,grandfatherNameEnglish,fatherNameEnglish)
    await serviceSeekerRequestPage.fillFormSerivceSeeker1(nationality,country,city,governorate,fakeemail,phone,profession,address,postal)
    await serviceSeekerRequestPage.NoRepresent()
    await serviceSeekerRequestPage.NextButton()
    await serviceSeekerRequestPage.conflictStep("تخصص","طبيعة النزاع","مبلغ 2000")
    await serviceSeekerRequestPage.AssignArbitrators("طلب ترشيح وتعيين من قبل المركز","داخل المركز","العربية")
    await serviceSeekerRequestPage.selectIdentity2(id,generateRandomNumbers(9),path)
    await serviceSeekerRequestPage.fillArabicNames(firstnameAr,fathernameAr,grandfathernameAr,familynameAr);
    await serviceSeekerRequestPage.fillEnglishNames(firstNameEnglish, fatherNameEnglish,grandfatherNameEnglish,fatherNameEnglish)
    await serviceSeekerRequestPage.fillFormSerivceSeeker2(nationality,country,city,governorate,fakeemail,phone,profession,address,postal)
    await serviceSeekerRequestPage.lastnextButton()
    await serviceSeekerRequestPage.UploadArbitrationDocuments(path,path,path,path)
    await serviceSeekerRequestPage.lastnextButton()
    await serviceSeekerRequestPage.payment_termsandconditions("مدعي")
    await serviceSeekerRequestPage.VisaPayment()
    await serviceSeekerRequestPage.SendRequestButton()
    expect(serviceSeekerRequestPage.VerifyCreatedRequestMessageIsDisplayed).toBeTruthy()


  });


  test("save draft Institutional Arbitration Request", async () => {
    await landingPage.goToLoginPage();
    await loginPage.LoginAsServiceSeeker(serviceSeekerUserName, serviceSeekerPassword);
    await homePage.goToMyRequestsPage();
    await serviceSeekerRequestPage.clickOncreateButton();
    await serviceSeekerRequestPage.clickOnInstituationalArbitration();
    await serviceSeekerRequestPage.clickOnSubmitButton();
    await serviceSeekerRequestPage.selectIdentity1(id,generateRandomNumbers(9),path)
    await serviceSeekerRequestPage.fillArabicNames(firstnameAr,fathernameAr,grandfathernameAr,familynameAr);
    await serviceSeekerRequestPage.fillEnglishNames(firstNameEnglish, fatherNameEnglish,grandfatherNameEnglish,fatherNameEnglish)
    await serviceSeekerRequestPage.fillFormSerivceSeeker1(nationality,country,city,governorate,fakeemail,phone,profession,address,postal)
    await serviceSeekerRequestPage.NoRepresent()
    await serviceSeekerRequestPage.NextButton()
    await serviceSeekerRequestPage.conflictStep("تخصص","طبيعة النزاع","مبلغ 2000")
    await serviceSeekerRequestPage.AssignArbitrators("طلب ترشيح وتعيين من قبل المركز","داخل المركز","العربية")
    await serviceSeekerRequestPage.selectIdentity2(id,generateRandomNumbers(9),path)
    await serviceSeekerRequestPage.fillArabicNames(firstnameAr,fathernameAr,grandfathernameAr,familynameAr);
    await serviceSeekerRequestPage.fillEnglishNames(firstNameEnglish, fatherNameEnglish,grandfatherNameEnglish,fatherNameEnglish)
    await serviceSeekerRequestPage.fillFormSerivceSeeker2(nationality,country,city,governorate,fakeemail,phone,profession,address,postal)
    await serviceSeekerRequestPage.lastnextButton()
    await serviceSeekerRequestPage.UploadArbitrationDocuments(path,path,path,path)
    await serviceSeekerRequestPage.lastnextButton()
    await serviceSeekerRequestPage.payment_termsandconditions("مدعي")
    await serviceSeekerRequestPage.VisaPayment()
    await serviceSeekerRequestPage.SaveForLaterButton()  
    expect(serviceSeekerRequestPage.DraftIsSavedMessageIsDisplayed()).toBeTruthy()
    await serviceSeekerRequestPage.page.pause()


  });
});
