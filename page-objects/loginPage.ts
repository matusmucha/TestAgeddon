import {Page} from "playwright/test";
import {HelperBase} from "./helperBase";

export class LoginPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async login(username: string, password: string) {
        await this.page.getByTestId('loginUsername').fill(username)
        await this.page.getByTestId('loginPassword').fill(password)
        await this.page.getByTestId('loginSubmit').click()
    }
}