import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";



export class HomePage extends BasePage{

   private logo:Locator;
   private manageadminbutton:Locator;
   private profileMenu: Locator;
   private myRequests: Locator;
   
   

    constructor(page:Page){
        super(page)

        this.logo=page.getByRole('link', { name: 'TAHKEEM' })
        this.manageadminbutton= page.getByText('إدارة المشرفين');
        this.profileMenu = page.getByRole('img', { name: 'User Avatar' })
        this.myRequests = page.getByRole('menuitem', { name: 'طلباتي' });
       

    }

    async goToMyRequestsPage(){

        await this.profileMenu.first().click();
        await this.myRequests.click();


}
    async logoIsVisible(){

       return await this.logo.isVisible()
    }

    async navigateToManageAdminPage(){

        await this.manageadminbutton.click()
    }
}