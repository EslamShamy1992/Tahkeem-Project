import {Page, Locator} from '@playwright/test'
import exp from 'constants'


export class BasePage{
    protected page:Page;

    constructor(page:Page){
        this.page=page;
    }

    

}