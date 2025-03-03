import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterationPage extends BasePage{

    private clickOnmember: Locator;
    private submitButton: Locator;
    private clickOnarbitrator:Locator;
    private Enteremail:Locator;
    private Enterphone:Locator;
    private Logo:Locator;
    private otpFields:Locator;
   

    constructor(page:Page){
        super(page)

      
      
        this.clickOnmember= page.locator('#mat-radio-3')
        this.submitButton= page.locator('//button[@type="submit"]')
        this.clickOnarbitrator= page.locator('#mat-mdc-checkbox-1')
        this.Enteremail= page.locator('//input[@type="email"]')
        this.Enterphone= page.getByRole('textbox', { name: 'رقم الجوال' })
        // this.Logo= page.getByRole('heading', { name: 'تأكيد رقم الجوال' })
      this.otpFields= page.locator('.otp-input')
       

    }

    async RegisterAsArbitrator(Email:string,Phone:string,otp:string):Promise<void>{

        await this.clickOnmember.click()
        await this.submitButton.click()
        await this.clickOnarbitrator.click()
        await this.submitButton.click()
        await this.Enteremail.fill(Email)
        await this.Enterphone.fill(Phone)
        await this.submitButton.click()
        await this.enterOtp(otp)
        
        await this.submitButton.click()
       
      
      
        

    }


    async clicksubmit(){
      await this.submitButton.click()
    }
    async enterOtp(otp: string) {
        for (let i = 0; i < otp.length; i++) {
          await this.otpFields.nth(i).fill(otp[i]); 
         
        }
    }



    async LogoIsVisible():Promise<boolean>{
        return this.Logo.isVisible()

    }

    }

    
