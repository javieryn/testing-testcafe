import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor () {
        this.usernameInput         = Selector('#email');
        this.passwordInput         = Selector('#password');
        this.loginButton           = Selector('.sel_login');
    }

    async login (username, password) {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }
}
