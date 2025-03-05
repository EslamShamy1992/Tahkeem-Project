import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MemberShipRequestPage extends BasePage{


    private memberShipRequestTitle:Locator;
    private nationalitydropdown:Locator;
    private countrydropdown:Locator;
    private identitydropdown :Locator;
    private identity: Locator;
    private enteridentity:Locator;
    private Uploadidentity:Locator;
    private gender:Locator;
    private address:Locator;
    private potalbox:Locator;
    private step2Title:Locator;
 
    private nextButton: Locator;

    constructor(page:Page){
        super(page)


        this.memberShipRequestTitle= page.getByRole('heading', { name: 'إستمارة طلب إنضمام' })


        this.nationalitydropdown = page.locator('[id="formly_24_nzSelect_appUser\\.nationalityId_2"]').getByRole('textbox')
        this.countrydropdown = page.locator('[id="formly_24_nzSelect_appUser\\.countryId_3"]').getByRole('textbox')
        this.identitydropdown = page.locator('[id="formly_24_nzSelect_appUser\\.identityType_4"]').getByRole('textbox')
        this.identity=page.getByText('هوية وطنية');
        this.enteridentity= page.getByRole('textbox', { name: 'رقم الهوية الوطنية' });
        this.Uploadidentity= page.locator('input[type="file"]');
        this.gender=page.getByText('ذكر');
        this.address=page.getByRole('textbox', { name: 'اكتب العنوان' });
        this.potalbox=page.getByRole('textbox', { name: 'الصندوق البريدي' });
        this.nextButton = page.getByRole('button', { name: 'التالي' });
        this.step2Title=page.getByText('البيانات المهنية');
    }


  
    async selectDropdownOption(dropdown: Locator, optionText: string) {
        await dropdown.click();
        await this.page.getByText(optionText, { exact: true }).first().click();
      }

     
   

    // Fill the form using reusable dropdown selection
    async fillMembershipRequestForm(id,path,Address,post,nationality,country) {
       await this.nationalitydropdown.click()
       await this.selectDropdownOption(this.nationalitydropdown, nationality);
       await this.countrydropdown.click()
       await this.selectDropdownOption(this.countrydropdown,country)
       await this.identitydropdown.click();
       await this.identity.click()
       await this.enteridentity.fill(id)
       await this.Uploadidentity.setInputFiles(path)
       await this.gender.click()
       await this.address.fill(Address)
       await this.potalbox.fill(post)
        
    }
    


    async clickNextButton() {
        await this.nextButton.click();
    }

    async VerifyStep2TitleIsDisplayed(){

       return await this.step2Title.isVisible()
    }

    async VerifymemberShipRequestTitleIsDisplayed(){

        return await this.memberShipRequestTitle.isVisible()
    }

}
