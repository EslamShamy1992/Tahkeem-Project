import { Page,Locator,expect } from "@playwright/test";
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
    private lastRow: Locator;
    private viewButton: Locator;
    private editButton:Locator;
    private searchInput:Locator;
    private resultRow: (email: string) => Locator;
    private enabledaccount:Locator;
    private eyeIcon: Locator;
    private switchButton: Locator;
    private editstatusButton: Locator;


    
 
     constructor(page:Page){
         super(page)
 
         this.addAdminButton = page.getByRole('button', { name: 'إضافة مشرف' }).nth(0);
        this.fullNameInput = page.getByRole('textbox', { name: 'اسم المشرف بالكامل' });
        this.emailInput = page.getByRole('textbox', { name: 'البريد الإلكتروني' });
        this.roleDropdown = page.locator('nz-select-top-control'); 
        this.adminRoleOption = page.getByText('المسؤول الإداري').nth(0);
        this.contentManagerRoleOption = page.getByText('مدير المحتوى');
        this.saveButton = page.getByRole('button', { name: 'حفظ' });
        this.confirmationmessage= page.getByRole('heading', { name: 'تم إضافة المشرف بنجاح' })
        this.lastRow = page.locator("tbody tr").first()
        this.viewButton = this.lastRow.locator("button.ant-btn-icon-only");
        this.editButton=page.locator('//span[@nztype="edit"]')
        this.searchInput= page.locator('input[placeholder="بحث عن اسم المشرف أو البريد الإلكتروني"]');
        this.resultRow = (email: string) =>page.locator('tbody tr').filter({ hasText: email }); 
        this.enabledaccount=page.locator('tbody tr').filter({ hasText: 'مفعل' }).first();
        this.eyeIcon=this.enabledaccount.locator('button.ant-btn-icon-only');
        this.switchButton = page.locator('nz-switch').getByRole('button');
        this.editstatusButton = page.getByRole('button', { name: 'تعديل' });
        
     }

     async addAdmin(fullName, email) {
        await this.addAdminButton.click();
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.roleDropdown.click()
        await this.adminRoleOption.click()
        await this.saveButton.click()
    }

    async editAdmin(editname,editemail){

        await this.editButton.click()
        await this.fullNameInput.clear()
        await this.fullNameInput.fill(editname);
        await this.emailInput.clear()
        await this.emailInput.fill(editemail);
        await this.roleDropdown.click()
        await this.page.keyboard.press("Backspace")
        await this.adminRoleOption.click()
        await this.saveButton.click()

    }

    async searchByAdminEmail(email: string) {
        await this.searchInput.fill(email);
        await this.page.keyboard.press('Enter');
       
    }
    async searchByAdminName(email: string) {
        await this.searchInput.fill(email);
        await this.page.keyboard.press('Enter');
       
    }



    async disableAdminAccount(){

        await this.eyeIcon.click();
        await this.switchButton.click();
        await this.editstatusButton.click();
    }


    async verifyEmailInResults(email: string) {
        await expect(this.resultRow(email)).toBeVisible();
    }
    async verifyNameInResults(email: string) {
        await expect(this.resultRow(email)).toBeVisible();
    }


    async viewLastUserDetails() {
        await this.viewButton.click();
    }

    async confirmationmessageIsDisplayed(){

        return await this.confirmationmessage.isVisible()
    }


     }