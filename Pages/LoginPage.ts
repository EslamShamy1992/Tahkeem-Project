import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";



export class LoginPage extends BasePage{

    private clickAdmin: Locator;
    private submitButton: Locator;
    private Enteremail:Locator;
    private Enterpassword:Locator;
   
   

    constructor(page:Page){
        super(page)

        this.clickAdmin=page.getByRole('heading', { name: 'مشرف' })
        this.submitButton= page.locator('//button[@type="submit"]')
        this.Enteremail= page.locator('//input[@type="email"]')
        this.Enterpassword= page.getByRole('textbox', { name: 'كلمة المرور' })

    }

    async loginAsAdmin(email,pass){

        await this.clickAdmin.click()
        await this.submitButton.click()
        await this.Enteremail.fill(email)
        await this.Enterpassword.fill(pass)
        await this.submitButton.click()
    }
}