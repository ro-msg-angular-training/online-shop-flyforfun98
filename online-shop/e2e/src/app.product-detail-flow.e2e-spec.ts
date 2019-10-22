import {browser} from 'protractor';
import {LoginPageTestComponent} from './test-components/login-page.test-component';
import {MainPageTestComponent} from './test-components/main-page.test-component';
import {ProductListPageTestComponent} from './test-components/product-list-page.test-component';
import {ProductDetailsPageTestComponent} from "./test-components/product-details-page.test-component";

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

  it('should be redirected to the login page automatically when not logged in', () => {
    mainPage.navigateTo();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'login');
    browser.sleep(1000);
  });

  it('should login with success as an admin using valid credentials', () => {
    loginPage.getPasswordField().clear();
    loginPage.getPasswordField().sendKeys('1');
    loginPage.getUsernameField().clear();
    loginPage.getUsernameField().sendKeys('1');
    loginPage.getSubmitButton().click();
    browser.sleep(1000);
  });

  it('should be redirected to product page', () => {
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'products');
  });

  it('should show a non-empty list of products', () => {
    expect(productListPage.getTableRows().count()).toBeGreaterThan(0);
  });

  it('should go to product details page', () => {
    productListPage.getFirstProductLink().click();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'products/0');
    browser.sleep(2000);
  });

  it('should contain product details', () => {
    expect(productDetailPage.getName().isPresent()).toBe(true);
    expect(productDetailPage.getImage().isPresent()).toBe(true);
    expect(productDetailPage.getCategory().isPresent()).toBe(true);
    expect(productDetailPage.getPrice().isPresent()).toBe(true);
    expect(productDetailPage.getDescription().isPresent()).toBe(true);
    browser.sleep(1000);
  });

});
