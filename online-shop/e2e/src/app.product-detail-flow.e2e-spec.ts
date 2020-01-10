import {browser, by, element} from 'protractor';
import {LoginPageTestComponent} from './test-components/login-page.test-component';
import {MainPageTestComponent} from './test-components/main-page.test-component';
import {ProductListPageTestComponent} from './test-components/product-list-page.test-component';
import {ProductDetailsPageTestComponent} from './test-components/product-details-page.test-component';

describe('online-shop product detail flow', () => {
  let loginPage: LoginPageTestComponent;
  let productListPage: ProductListPageTestComponent;
  let mainPage: MainPageTestComponent;
  let productDetailPage: ProductDetailsPageTestComponent;

  beforeEach(() => {
    loginPage = new LoginPageTestComponent();
    productListPage = new ProductListPageTestComponent();
    productDetailPage = new ProductDetailsPageTestComponent();
    mainPage = new MainPageTestComponent();

  });

  it('should be redirected to the login page automatically when application is opened', () => {

    browser.get('http://localhost:4200/');
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'login');
    browser.sleep(1000);
  });


  it('should login with success and to be redirected to products page', () => {

    element(by.id('usernameInput')).sendKeys('blackj');
    element(by.id('passwordInput')).sendKeys('12345678');
    element(by.id('loginButton')).click();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'products');
    browser.sleep(1000);
  });

  it('should show a non-empty list of products', () => {

    expect(element.all(by.id('productsTable')).count()).toBeGreaterThan(0);
  });


  it('should click on one product,', () => {

    element.all(by.tagName('mat-cell a')).first().click();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'products/0');
    browser.sleep(1000);
  });

  it('should show the product\'s details.', () => {

    expect(element.all(by.tagName('h1')).first().isPresent()).toBe(true);
    expect(element.all(by.tagName('h1')).last().getText()).toEqual('Notebook Basic 15');

    expect(element(by.tagName('p')).isPresent()).toBe(true);
    expect(element(by.tagName('p')).getText()).toEqual('Notebook Basic 15 with 2,80 GHz quad core, 15\" ' +
      'LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro');

    expect(element.all(by.tagName('div div div div')).last().all(by.tagName('span')).first().isPresent()).toBe(true);
    expect(element.all(by.tagName('div div div div')).last().all(by.tagName('span')).first().getText()).toEqual('Laptops');

    expect(element.all(by.tagName('div div div div')).last().all(by.tagName('span')).last().isPresent()).toBe(true);
    expect(element.all(by.tagName('div div div div')).last().all(by.tagName('span')).last().getText()).toEqual('956');

    browser.sleep(1000);
  });

});
