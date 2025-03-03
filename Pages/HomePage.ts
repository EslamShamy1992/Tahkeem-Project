import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";



export class HomePage extends BasePage{

   private logo:Locator;
   private manageadminbutton:Locator;
   
   

    constructor(page:Page){
        super(page)

        this.logo=page.getByRole('link', { name: 'TAHKEEM' })
        this.manageadminbutton= page.getByText('إدارة المشرفين');
       

    }

    async logoIsVisible(){

       return await this.logo.isVisible()
    }

    async navigateToManageAdminPage(){

        await this.manageadminbutton.click()
    }
}