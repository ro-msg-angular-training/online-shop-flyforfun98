import {browser, by, element} from 'protractor';

export class ProductListPageTestComponent {
  navigateTo() {
    return browser.get('/products');
  }

  getTableRows() {
    return element.all(by.tagName('tr'));
  }

  getFirstProductLink() {
    return element(by.tagName('td a'));
  }
}
