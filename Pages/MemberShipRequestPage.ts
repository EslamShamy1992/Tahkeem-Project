import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MemberShipRequestPage extends BasePage{


    private memberShipRequestTitle:Locator;

    constructor(page:Page){
        super(page)


        this.memberShipRequestTitle=page.getByRole('heading', { name: 'إستمارة طلب إنضمام' });
    }



    async VerifymemberShipRequestTitleIsDisplayed(){

        return await this.memberShipRequestTitle.isVisible()
    }

}
