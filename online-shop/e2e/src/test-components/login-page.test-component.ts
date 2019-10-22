import {browser, by, element} from 'protractor';

export class LoginPageTestComponent {
  navigateTo() {
    return browser.get('/login');
  }

  getUsernameField() {
    return element(by.id('usernameInput'));
  }

  getPasswordField() {
    return element(by.id('passwordInput'));
  }

  getSubmitButton() {
    return element(by.id('submitButton'));
  }
}
