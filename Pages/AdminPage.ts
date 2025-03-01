import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { promises } from "dns";

export  class AdminPage extends BasePage{
    private member: Locator;
    private submitButton: Locator;
    private arbitrator:Locator;
    private email:Locator;
    private phone:Locator;
    private Logo:Locator;

    constructor(page:Page){
        super(page)


        this.member= page.locator('#mat-radio-3')
        this.submitButton= page.locator('//button[@type="submit"]')
        this.arbitrator= page.locator('#mat-mdc-checkbox-1')
        this.email= page.locator('//input[@type="email"]')
        this.phone= page.getByRole('textbox', { name: 'رقم الجوال' })
        this.Logo= page.getByRole('heading', { name: 'تأكيد رقم الجوال' })

    }

    async RegisterAsArbitrator(Email:string,Phone:string):Promise<void>{

        await this.member.click()
        await this.submitButton.click()
        await this.arbitrator.click()
        await this.submitButton.click()
        await this.email.fill(Email)
        await this.phone.fill(Phone)
        await this.submitButton.click()

    }

    async LogoIsVisible():Promise<boolean>{
        return this.Logo.isVisible()

    }
    







    
}