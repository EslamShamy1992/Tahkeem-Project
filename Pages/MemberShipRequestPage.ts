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

    private agreeYes: Locator;
  private generalSpecialty: Locator;
  private uploadGeneralSpecialty: Locator;
  private languagesDropdown: Locator;
  private arabicLanguage: Locator;
  private englishLanguage: Locator;
  private plusButton: Locator;
  private currentJobTitle: Locator;
  private currentWorkplace: Locator;
  private uploadCV: Locator;
  private uploadArbitrationCourse: Locator;
  private agreementCheckbox1: Locator;
  private agreementCheckbox2: Locator;
  private sendButton: Locator;
  private havework:Locator;

    constructor(page:Page){
        super(page)

        //step 1 locators
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


        //step 2 locators
        this.agreeYes = page.getByText('نعم');
        this.generalSpecialty = page.getByRole('textbox', { name: 'التخصص العام' });
        this.uploadGeneralSpecialty = page.locator('app-formly-file').filter({ hasText: 'إرفاق شهادة التخصص العام' }).getByRole('textbox');
        this.languagesDropdown = page.locator('nz-select-top-control').filter({ hasText: 'اللغات' });
        this.arabicLanguage = page.getByTitle('العربية').locator('div');
        this.englishLanguage = page.getByText('الإنجليزية', { exact: true });
        this.plusButton = page.getByRole('button', { name: '+' }).first();
        this.currentJobTitle = page.getByRole('textbox', { name: 'المهنة / المسمى الوظيفي الحالي' });
        this.currentWorkplace = page.getByRole('textbox', { name: 'اسم جهة العمل الحالية' });
        this.havework= page.locator('#mat-radio-18').getByText('نعم')
        this.uploadCV = page.locator('app-formly-file').filter({ hasText: 'إرفاق السيرة الذاتية باللغة العربية' }).getByRole('textbox');
        this.uploadArbitrationCourse = page.locator('app-formly-file').filter({ hasText: 'إرفاق إثبات اجتياز دورات برنامـج تأهيل وإعداد المحكمين' }).getByRole('textbox');
        this.agreementCheckbox1 = page.locator('div').filter({ hasText: /^لقد قرأت التعهد وأقر بصحة البيانات$/ }).getByRole('checkbox');
        this.agreementCheckbox2 = page.getByLabel('التعهد وتأكيد صحة البيانات').locator('div').filter({ hasText: 'أقر بإطلاعي على لائحة العضوية' }).getByRole('checkbox');
        this.sendButton = page.getByRole('button', { name: 'إرسال' });


    }


  
    async selectDropdownOption(dropdown: Locator, optionText: string) {
        await dropdown.click();
        await this.page.getByText(optionText, { exact: true }).first().click();
      }

     
 
    async fillMembershipRequestForm1(id,path,Address,post,nationality,country) {
    
       await this.selectDropdownOption(this.nationalitydropdown, nationality);
       await this.selectDropdownOption(this.countrydropdown,country)
       await this.identitydropdown.click();
       await this.identity.click()
       await this.enteridentity.fill(id)
       await this.Uploadidentity.setInputFiles(path)
       await this.gender.click()
       await this.address.fill(Address)
       await this.potalbox.fill(post)

      
        
    }
    async fillmembershipForm2(path){

        await this.agreeYes.click();
        await this.generalSpecialty.fill('حقوق');
        await this.uploadGeneralSpecialty.setInputFiles(path);
        await this.languagesDropdown.click();
        await this.arabicLanguage.click();
        await this.englishLanguage.click();
        await this.plusButton.click();
        await this.plusButton.click();
        
        await this.currentJobTitle.fill('محامي');
        await this.havework.click()
        await this.currentWorkplace.fill('42 جروب');
        await this.uploadCV.setInputFiles(path);
        await this.uploadArbitrationCourse.setInputFiles(path);
        await this.nextButton.click();
        await this.agreementCheckbox1.check();
        await this.agreementCheckbox2.check();
        await this.sendButton.click();
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
