import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterationPage extends BasePage{

    private clickOnmember: Locator;
    private submitButton: Locator;
    private clickOnarbitrator:Locator;
    private Enteremail:Locator;
    private Enterphone:Locator;
    private Logo:Locator;
    private otpField:Locator;
    private firstNameArabic: Locator;
    private fatherNameArabic: Locator;
    private grandfatherNameArabic: Locator;
    private familyNameArabic: Locator;
    private firstNameEnglish: Locator;
    private fatherNameEnglish: Locator;
    private grandfatherNameEnglish: Locator;
    private familyNameEnglish: Locator;
    private password: Locator;
    private confirmPassword: Locator;
   

    constructor(page:Page){
        super(page)

      
      
        this.clickOnmember= page.locator('#mat-radio-3')
        this.submitButton= page.locator('//button[@type="submit"]')
        this.clickOnarbitrator= page.locator('#mat-mdc-checkbox-1')
        this.Enteremail= page.locator('//input[@type="email"]')
        this.Enterphone= page.getByRole('textbox', { name: 'رقم الجوال' })
        // this.Logo= page.getByRole('heading', { name: 'تأكيد رقم الجوال' })
      this.otpField= page.locator("(//input[@autocomplete='one-time-code'])[1]");
      this.firstNameArabic = page.getByRole('textbox', { name: 'الاسم الأول بالعربي' });
      this.fatherNameArabic = page.getByRole('textbox', { name: 'اسم الأب بالعربي' });
      this.grandfatherNameArabic = page.getByRole('textbox', { name: 'اسم الجد بالعربي' });
      this.familyNameArabic = page.getByRole('textbox', { name: 'اسم العائلة بالعربي' });
      this.firstNameEnglish = page.getByRole('textbox', { name: 'الاسم الأول بالأنجليزية' });
      this.fatherNameEnglish = page.getByRole('textbox', { name: 'اسم الأب بالأنجليزية' });
      this.grandfatherNameEnglish = page.getByRole('textbox', { name: 'اسم الجد بالأنجليزية' });
      this.familyNameEnglish = page.getByRole('textbox', { name: 'اسم العائلة بالأنجليزية' });
      this.password = page.getByRole('textbox', { name: 'كلمة المرور', exact: true });
      this.confirmPassword = page.getByRole('textbox', { name: 'تأكيد كلمة المرور' });
       

    }

    async RegisterAsArbitrator(Email,Phone,otp):Promise<void>{

        await this.clickOnmember.click()
        await this.submitButton.click()
        await this.clickOnarbitrator.click()
        await this.submitButton.click()
        await this.Enteremail.fill(Email)
        await this.Enterphone.fill(Phone)
        await this.submitButton.click()
        await this.otpField.fill(otp)
        await this.submitButton.click()
         

    }


    async fillArabicNames(first, father, grandfather, family) {
      await this.firstNameArabic.fill(first);
      await this.fatherNameArabic.fill(father);
      await this.grandfatherNameArabic.fill(grandfather);
      await this.familyNameArabic.fill(family);
  }

  async fillEnglishNames(first, father, grandfather, family) {
    await this.firstNameEnglish.fill(first);
    await this.fatherNameEnglish.fill(father);
    await this.grandfatherNameEnglish.fill(grandfather);
    await this.familyNameEnglish.fill(family);
}

async setPassword(password) {
  await this.password.fill(password);
}

async confirmPasswordMatch(password) {
  await this.confirmPassword.fill(password);
  await this.submitButton.click()
}

    async clicksubmit(){
      await this.submitButton.click()
    }
  



    async LogoIsVisible():Promise<boolean>{
        return this.Logo.isVisible()

    }

    }

    
