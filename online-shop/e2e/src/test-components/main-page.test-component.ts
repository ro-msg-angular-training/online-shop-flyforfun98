import {browser} from 'protractor';

export class MainPageTestComponent {
  navigateTo() {
    return browser.get('/');
  }
}
