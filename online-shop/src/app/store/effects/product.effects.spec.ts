import {
  GetProductSuccess,
  AddNewProductSuccess,
  RemoveProductSuccess,
  UpdateProductSuccess,
  GetProduct,
  AddNewProduct,
  UpdateProduct,
  RemoveProduct
} from '../actions/product.actions';
import {Product} from '../../models/product';
import {TestBed} from '@angular/core/testing';
import {ProductEffects} from './product.effects';
import {ProductService} from '../../products/product.service';
import {provideMockActions} from '@ngrx/effects/testing';
import {Actions} from '@ngrx/effects';
import {RouterTestingModule} from '@angular/router/testing';
import {cold, hot} from 'jasmine-marbles';

describe('Product Effects', () => {

  let actions: any;
  let productEffect: ProductEffects;
  let productService: ProductService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        ProductEffects,
        provideMockActions(() => actions),
        {
          provide: ProductService
        }
      ]
    });
    productEffect = TestBed.get(ProductEffects);
    productService = TestBed.get(ProductService);
    actions = TestBed.get(Actions);
    productService = new ProductService(null);
  });

  const product: Product = {
    id: 1,
    name: 'Laptop X',
    category: 'Electronics',
    price: 800,
    image: 'https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg',
    description: 'Best laptop in the world'
  };

  describe('[Effect] Get Product', () => {
    it('should return a product', () => {

      const action = new GetProduct(1);
      const outcome = new GetProductSuccess(product);

      actions = hot('-a', {a: action});
      const response = cold('-a|', {a: product});
      const expected = cold('--b', {b: outcome});

      productEffect = new ProductEffects(productService, actions, null);

      spyOn(productService, 'getProduct').withArgs(1).and.returnValue(response);

      expect(productEffect.getProduct$).toBeObservable(expected);
    });
  });

  describe('[Effect] Add Product', () => {
    it('should add a product', () => {

      const addAction = new AddNewProduct(product);
      const addOutcome = new AddNewProductSuccess(product);

      actions = hot('-a', {a: addAction});
      const response = cold('-a|', {a: product});
      const expected = cold('--b', {b: addOutcome});

      productEffect = new ProductEffects(productService, actions, null);
      spyOn(productService, 'createProduct').withArgs(product).and.returnValue(response);
      expect(productEffect.addNewProduct$).toBeObservable(expected);

    });
  });


  describe('[Effect] Edit Product', () => {
    it('should edit a product', () => {

      product.name = 'TV';
      product.category = 'Entertainment';
      product.description = 'Best TV in the world!';
      const editAction = new UpdateProduct(product);
      const editOutcome = new UpdateProductSuccess(product);

      actions = hot('-a', {a: editAction});
      const response = cold('-a|', {a: product});
      const expected = cold('--b', {b: editOutcome});
      productEffect = new ProductEffects(productService, actions, null);
      spyOn(productService, 'editProduct').withArgs(1, product).and.returnValue(response);
      expect(productEffect.updateProduct$).toBeObservable(expected);
    });
  });

  describe('[Effect] Remove Product', () => {
    it('should remove a product', () => {

      const removeAction = new RemoveProduct(1);
      const removeOutcome = new RemoveProductSuccess(1);

      actions = hot('-a', {a: removeAction});
      const response = cold('-a|', {a: {}});
      const expected = cold('--b', {b: removeOutcome});
      productEffect = new ProductEffects(productService, actions, null);
      spyOn(productService, 'removeProduct').withArgs(1).and.returnValue(response);
      expect(productEffect.removeProduct$).toBeObservable(expected);

    });
  });

});
