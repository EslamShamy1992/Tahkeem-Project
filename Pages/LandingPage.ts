import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LandingPage extends BasePage{

    private clickRegisterButton:Locator;
    private clickLoginButton:Locator;
    private LandingPageTitle:Locator;

    constructor(page:Page){
        super(page)

        this.clickRegisterButton=page.getByRole('button', { name: 'إنشاء حساب' })
        this.clickLoginButton=page.getByRole('button', { name: 'تسجيل الدخول' })
        this.LandingPageTitle=page.getByRole('heading', { name: 'عن مركز غرفة الشرقية للتحكيم' })



    }
    async goToRegisterPage():Promise<void>{

        await this.clickRegisterButton.click()
    }

    async goToLoginPage():Promise<void>{

        await this.clickLoginButton.click()
    }

    async LandingpageTitleIsDisplayed(){
        return await this.LandingPageTitle.isVisible()
    }













}