import {by, element} from 'protractor';

export class ProductDetailsPageTestComponent {
  getName() {
    return element(by.id('productName'));
  }

  getImage() {
    return element(by.id('productImage'));
  }

  getCategory() {
    return element(by.id('productName'));
  }

  getPrice() {
    return element(by.id('productPrice'));
  }

  getDescription() {
    return element(by.id('productDescription'));
  }
}
