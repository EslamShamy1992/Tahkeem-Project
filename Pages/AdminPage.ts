import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";



export class AdminPage extends BasePage{

  
    private addAdminButton: Locator;
    private fullNameInput: Locator;
    private emailInput: Locator;
    private roleDropdown: Locator;
    private adminRoleOption: Locator;
    private contentManagerRoleOption: Locator;
    private saveButton: Locator;
    private confirmationmessage:Locator;
    
 
     constructor(page:Page){
         super(page)
 
         this.addAdminButton = page.getByRole('button', { name: 'إضافة مشرف' }).nth(0);
        this.fullNameInput = page.getByRole('textbox', { name: 'اسم المشرف بالكامل' });
        this.emailInput = page.getByRole('textbox', { name: 'البريد الإلكتروني' });
        this.roleDropdown = page.locator('nz-select-top-control'); 
        this.adminRoleOption = page.getByText('المسؤول الإداري');
        this.contentManagerRoleOption = page.getByText('مدير المحتوى');
        this.saveButton = page.getByRole('button', { name: 'حفظ' });
        this.confirmationmessage= page.getByRole('heading', { name: 'تم إضافة المشرف بنجاح' })
    
        
     }

     async addAdmin(fullName, email) {
        await this.addAdminButton.click();
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.roleDropdown.click()
        await this.adminRoleOption.click()
        await this.saveButton.click()
    }



    async confirmationmessageIsDisplayed(){

        return await this.confirmationmessage.isVisible()
    }


     }