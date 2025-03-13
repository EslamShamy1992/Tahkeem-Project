import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ServiceSeekerRequestPage extends BasePage{


    private clickonCreateNewRequest:Locator;
    private institutionalarbitration:Locator;
    private submitButton: Locator;

    constructor(page:Page){
        super(page)
        this.clickonCreateNewRequest=page.getByRole('button', { name: 'إنشاء طلب جديد' })
        this.institutionalarbitration=page.getByRole('heading', { name: 'تحكيم مؤسسي' });
        this.submitButton= page.locator('//button[@type="submit"]')
       

    }

    async clickOncreateButton(){

        await this.clickonCreateNewRequest.click()
    }

    async clickOnInstituationalArbitration(){

        await this.institutionalarbitration.click()
    }

    async clickOnSubmitButton(){

        await this.submitButton.click()
    }
    

}