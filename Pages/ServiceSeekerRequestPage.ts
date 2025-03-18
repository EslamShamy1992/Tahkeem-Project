import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ServiceSeekerRequestPage extends BasePage{


    private clickonCreateNewRequest:Locator;
    private institutionalarbitration:Locator;
    private submitButton: Locator;
    private identityDropdown: Locator;
    private enterID:Locator;
    private uploadIDFile:Locator;
    private firstNameArabic: Locator;
    private fatherNameArabic: Locator;
    private grandfatherNameArabic: Locator;
    private familyNameArabic: Locator;
    private firstNameEnglish: Locator;
    private fatherNameEnglish: Locator;
    private grandfatherNameEnglish: Locator;
    private familyNameEnglish: Locator;
    private gender:Locator;
    private countrydropdown:Locator;
    private nationalitydropdown:Locator;
    private city:Locator;
    private governorate:Locator;
    private Enteremail:Locator;
    private Enterphone:Locator;
    private address:Locator;
    private potalbox:Locator;
    private profession:Locator;
    private nextButton: Locator;
    private noRepresentitive:Locator;
    private conflicSpecialization:Locator;
    private natureOfConflict:Locator;
    private conflictProcedure:Locator;
    private setArbitratorsdropdown:Locator;
    private arbitrationPlacedropdown:Locator;
    private arbitrationLanguagedropdown:Locator;
    private arabicLanguage: Locator;
    private englishLanguage: Locator;
    private identity2:Locator;
    private nationalitydropdown2:Locator;
    private countrydropdown2:Locator;
    private citydropdown2:Locator;
    private uploadArbitrationcondition:Locator;
    private uploadlegalRelation:Locator;
    private uploadContract:Locator;
    private uploadagencydocument:Locator;
    private termsandCondition1:Locator;
    private termsandCondition2:Locator;
    private RoleInCasedropdown:Locator;
    private madapayment:Locator;
    private banktransfer:Locator;
    private uploadbanktransferfile:Locator;
    private visapayment:Locator;
    private sendrequestButton:Locator;
    private requestIsCreatedMessage: Locator;
    private saveForLaterButton:Locator;
    private draftIssavedmessage:Locator;

    constructor(page:Page){
        super(page)

        this.clickonCreateNewRequest=page.getByRole('button', { name: 'إنشاء طلب جديد' })
        this.institutionalarbitration=page.getByRole('heading', { name: 'تحكيم مؤسسي' });
        this.submitButton= page.locator('//button[@type="submit"]')
       
        this.identity2= page.locator('[id="formly_112_nzSelect_userProfile\\.appUser\\.identityType_1"]').getByRole('textbox')
       
        this.identityDropdown = page.locator('[id="formly_75_nzSelect_userProfile\\.appUser\\.identityType_1"]').getByRole('textbox');
        this.enterID=  page.getByRole('textbox', { name: 'رقم الهوية الوطنية' })
        this.uploadIDFile=page.locator('input[type="file"]')
        this.firstNameArabic = page.getByRole('textbox', { name: 'الاسم الأول بالعربي' });
        this.fatherNameArabic = page.getByRole('textbox', { name: 'اسم الأب بالعربي' });
        this.grandfatherNameArabic = page.getByRole('textbox', { name: 'اسم الجد بالعربي' });
        this.familyNameArabic = page.getByRole('textbox', { name: 'اسم العائلة بالعربي' });
        this.firstNameEnglish = page.getByRole('textbox', { name: 'الاسم الأول بالأنجليزية' });
        this.fatherNameEnglish = page.getByRole('textbox', { name: 'اسم الأب بالأنجليزية' });
        this.grandfatherNameEnglish = page.getByRole('textbox', { name: 'اسم الجد بالأنجليزية' });
        this.familyNameEnglish = page.getByRole('textbox', { name: 'اسم العائلة بالأنجليزية' });
        this.gender=page.getByText('ذكر');

        this.nationalitydropdown2=page.locator('[id="formly_120_nzSelect_userProfile\\.appUser\\.nationalityId_12"]').getByRole('textbox')
        this.nationalitydropdown = page.locator('[id="formly_83_nzSelect_userProfile\\.appUser\\.nationalityId_12"]').getByRole('textbox')
        this.countrydropdown = page.locator('[id="formly_83_nzSelect_userProfile\\.appUser\\.countryId_13"]').getByRole('textbox')
        this.city=page.locator('[id="formly_83_nzSelect_userProfile\\.appUser\\.cityId_14"]').getByRole('textbox')
        
        this.governorate=page.getByRole('textbox', { name: 'الولاية / المحافظة' })
        this.Enteremail= page.locator('//input[@type="email"]')
        this.Enterphone= page.getByRole('textbox', { name: 'رقم الجوال' })
        this.profession=page.getByRole('textbox', { name: 'المهنة / المسمى الوظيفي الحالي' })
        this.address=page.getByRole('textbox', { name: 'اكتب العنوان' });
        this.potalbox=page.getByRole('textbox', { name: 'الصندوق البريدي' });
        this.nextButton = page.getByRole('button', { name: 'التالي' });
        this.noRepresentitive=page.getByText('لا يوجد')
        this.conflicSpecialization=page.getByRole('textbox', { name: 'تخصصات مجال النزاع' })
        this.natureOfConflict=page.getByRole('textbox', { name: 'طبيعة المنازعة' });
        this.conflictProcedure=page.getByRole('textbox', { name: 'المبلغ أو الإجراء المطالب به' })
        this.setArbitratorsdropdown=page.locator('#formly_30_nzSelect_arbitratorType_0').getByRole('textbox');
        this.arbitrationPlacedropdown=page.locator('#formly_30_nzSelect_tahkeemPlace_2').getByRole('textbox');
        this.arbitrationLanguagedropdown=page.locator('nz-select-top-control').filter({ hasText: 'اللغات' });
       

        this.arabicLanguage = page.getByTitle('العربية').locator('div');
        this.englishLanguage = page.getByText('الإنجليزية', { exact: true });
        this.countrydropdown2=page.locator('[id="formly_120_nzSelect_userProfile\\.appUser\\.countryId_13"]').getByRole('textbox')
        this.citydropdown2=page.locator('[id="formly_120_nzSelect_userProfile\\.appUser\\.cityId_14"]').getByRole('textbox')

      
        this.uploadArbitrationcondition=page.locator('app-formly-file').filter({ hasText: 'إرفاق شرط التحكيم / مشارطة التحكيميمكن رفع الملفات من نوع( pdf, jpeg, png )' }).getByRole('textbox')
  
        this.uploadlegalRelation=page.locator('app-formly-file').filter({ hasText: 'إرفاق ملف يشير إلــى العلاقــة القانونيــة التــي نشــأ عنهــا النـزاع أو الــذي' }).getByRole('textbox')
        this.uploadContract=page.locator('app-formly-file').filter({ hasText: 'إرفاق العقديمكن رفع الملفات من نوع( pdf, jpeg, png )' }).getByRole('textbox')
        this.uploadagencydocument=page.locator('app-formly-file').filter({ hasText: 'إرفاق وثيقة الوكالةيمكن رفع الملفات من نوع( pdf, jpeg, png )' }).getByRole('textbox')

  
        this.termsandCondition1=page.getByRole('checkbox');
        this.termsandCondition2= page.getByRole('checkbox');
        this.RoleInCasedropdown=page.getByRole('textbox')


        this.madapayment=page.getByText('مدى')
        this.banktransfer=page.getByText('حوالة بنكية')
        this.uploadbanktransferfile=page.getByRole('tabpanel', { name: 'الإقرار وبيانات الدفع' }).locator('input[type="file"]')
        this.visapayment=page.getByText('فيزا / ماستركارد')
        this.sendrequestButton=page.getByRole('button', { name: 'إرسال' })
        this.requestIsCreatedMessage = page.getByRole('heading', { name: 'تم إنشاء الطلب بنجاح' }); 
        this.saveForLaterButton=page.getByRole('button', { name: 'حفظ لوقت لاحق' });
        this.draftIssavedmessage=page.getByRole('heading', { name: 'تم حفظ الطلب كمسودة' })



        
    }


    async SaveForLaterButton(){

        await this.saveForLaterButton.last().click()
    }

    async DraftIsSavedMessageIsDisplayed(){

       return await this.draftIssavedmessage.isVisible()
    }


    async VerifyCreatedRequestMessageIsDisplayed(){
        return await this.requestIsCreatedMessage.isVisible()
    }


    async MadaPayment(){
        await this.madapayment.click()
    }

    async VisaPayment(){
        await this.visapayment.click()
    }


    async BankTransferPayment(file){
        await this.banktransfer.click()
        await this.uploadbanktransferfile.setInputFiles(file)
    }


    async SendRequestButton(){

        await this.sendrequestButton.click()
    }

    async setidentity2(identity){
        await this.selectDropdownOption(this.identity2,identity,0)
    }


    async UploadArbitrationDocuments(file1,file2,file3,file4){

        await this.uploadArbitrationcondition.setInputFiles(file1)
        await this.page.waitForTimeout(3000)
        await this.uploadlegalRelation.setInputFiles(file2)
        await this.page.waitForTimeout(3000)
        await this.uploadContract.setInputFiles(file3)
        await this.page.waitForTimeout(3000)
        await this.uploadagencydocument.setInputFiles(file4)

    }

    async AssignArbitrators(arbitrators,place){

        await this.selectDropdownOption(this.setArbitratorsdropdown,arbitrators,0)
        await this.selectDropdownOption(this.arbitrationPlacedropdown,place,0)
        await this.arbitrationLanguagedropdown.click()
        await this.arabicLanguage.click()
        await this.englishLanguage.click()
        await this.nextButton.click()
    }





    async fillArabicNames(first, father, grandfather, family) {
        await this.firstNameArabic.fill(first);
        await this.fatherNameArabic.fill(father);
        await this.grandfatherNameArabic.fill(grandfather);
        await this.familyNameArabic.fill(family);
    }
  
    async fillEnglishNames(first, father, grandfather, family) {
      await this.firstNameEnglish.fill(first);
      await this.fatherNameEnglish.fill(father);
      await this.grandfatherNameEnglish.fill(grandfather);
      await this.familyNameEnglish.fill(family);


    }


    async payment_termsandconditions(role){

        await this.termsandCondition1.first().check()
        await this.termsandCondition2.nth(1).check()
        await this.selectDropdownOption(this.RoleInCasedropdown,role,0)

        

    }
    async selectGender() {
        await this.gender.click();
    }

    async selectNationality(nationality: string) {
        await this.nationalitydropdown.click();
        await this.page.getByRole('option', { name: nationality }).click();
    }

    async selectCountry(country: string) {
        await this.countrydropdown.click();
        await this.page.getByRole('option', { name: country }).click();
    }

    async selectCity(city: string) {
        await this.city.click();
        await this.page.getByRole('option', { name: city }).click();
    }

    async enterEmailAddress(email: string) {
        await this.Enteremail.fill(email);
    }

    async enterPhoneNumber(phone: string) {
        await this.Enterphone.fill(phone);
    }

    async enterProfession(profession: string) {
        await this.profession.fill(profession);
    }

    async enterAddress(address: string) {
        await this.address.fill(address);
    }

    async enterPostalBox(postalBox: string) {
        await this.potalbox.fill(postalBox);
    }

    async fillFormSerivceSeeker1( nationality,country,city,gover,email, phone, profession, address, postalBox) {
        await this.selectGender()
        await this.selectDropdownOption(this.nationalitydropdown,nationality,0)
        await this.selectDropdownOption(this.countrydropdown,country,0)
        await this.selectDropdownOption(this.city,city,0)
        await this.governorate.fill(gover)
        await this.enterEmailAddress(email);
        await this.enterPhoneNumber(phone);
        await this.enterProfession(profession);
        await this.enterAddress(address);
        await this.enterPostalBox(postalBox);
        await this.nextButton.click()
        
    }
    async fillFormSerivceSeeker2(nationality,country,city,gover,email, phone, profession, address, postalBox) {
        await this.gender.nth(1).click()
        await this.selectDropdownOption(this.nationalitydropdown2,nationality,1)
        await this.selectDropdownOption(this.countrydropdown2,country,1)
        await this.selectDropdownOption(this.citydropdown2,city,1)
        await this.governorate.fill(gover)
        await this.Enteremail.nth(1).fill(email)
        await this.Enterphone.last().fill(phone)
        await this.profession.last().fill(profession)
        await this.address.last().fill(address)
        await this.potalbox.last().fill(postalBox)
        await this.nextButton.last().click()
        await this.noRepresentitive.last().click()
        
        
    }
    async lastnextButton(){

        await this.nextButton.last().click()
    }


    async conflictStep(spec,nature,pro){
        await this.conflicSpecialization.fill(spec)
        await this.natureOfConflict.fill(nature)
        await this.conflictProcedure.fill(pro)
        await this.nextButton.nth(1).click()
    }
    async NextButton(){

        await this.nextButton.click()
    }

    async NoRepresent(){
        await this.noRepresentitive.click()
    }
    async selectDropdownOption(dropdown: Locator, optionText: string,index) {
        await dropdown.click();
        await this.page.getByText(optionText, { exact: true }).nth(index).click();
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
    

    async selectIdentity1(index,id,file) {
       
        await this.identityDropdown.click(); 
        await this.page.locator('.ant-select-item-option').nth(index).click(); 
        await this.enterID.fill(id)
        await this.uploadIDFile.setInputFiles(file)
      }
      async selectIdentity2(index,id,file){
        await this.identity2.click()
        await this.page.locator('.ant-select-item-option').nth(index).click(); 
        await this.enterID.fill(id)
        await this.uploadIDFile.setInputFiles(file)
      }
}