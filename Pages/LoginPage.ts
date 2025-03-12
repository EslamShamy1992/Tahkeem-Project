import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";



export class LoginPage extends BasePage{

    private clickAdmin: Locator;
    private submitButton: Locator;
    private Enteremail:Locator;
    private Enterpassword:Locator;
    private clickOnServiceSeeker:Locator;
    private clickOnMember:Locator;
   
   

    constructor(page:Page){
        super(page)

        this.clickAdmin=page.getByRole('heading', { name: 'مشرف' })
        this.submitButton= page.locator('//button[@type="submit"]')
        this.Enteremail= page.locator('//input[@type="email"]')
        this.Enterpassword= page.getByRole('textbox', { name: 'كلمة المرور' })
        this.clickOnServiceSeeker=page.getByRole('heading', { name: 'طالب خدمة' });
        this.clickOnMember=page.getByRole('heading', { name: 'عضو' })

    }

    async loginAsAdmin(email,pass){

        await this.clickAdmin.click()
        await this.submitButton.click()
        await this.Enteremail.fill(email)
        await this.Enterpassword.fill(pass)
        await this.submitButton.click()
    }

    async LoginAsServiceSeeker(email,pass){
        await this.clickOnServiceSeeker.click()
        await this.submitButton.click()
        await this.Enteremail.fill(email)
        await this.Enterpassword.fill(pass)
        await this.submitButton.click()


    }
    async LoginAsMember(email,pass){


        await this.clickOnMember.click()
        await this.submitButton.click()
        await this.Enteremail.fill(email)
        await this.Enterpassword.fill(pass)
        await this.submitButton.click()

    }
}