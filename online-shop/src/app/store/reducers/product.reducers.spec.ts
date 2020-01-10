import {
  GetProductSuccess,
  AddNewProductSuccess,
  RemoveProductSuccess,
  UpdateProductSuccess, ProductActions
} from '../actions/product.actions';
import {initialProductState} from '../state/product.state';
import {productReducers} from './product.reducers';
import {Product} from '../../models/product';

describe('Product Reducer', () => {
  const product: Product = {
    id: 1,
    name: 'Laptop X',
    category: 'Electronics',
    price: 800,
    image: 'https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg',
    description: 'Best laptop in the world'
  };

  describe('[Product] Initial State Check', () => {
    it('should return the default state', () => {
      const initialState = initialProductState;
      const action = {} as ProductActions;
      const state = productReducers(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[Product] Get Product', () => {
    it('should get the 1st product', () => {
      const action = new GetProductSuccess(product);
      const result = productReducers(initialProductState, action);

      const resultProduct = {selectedProduct: product, products: [], entities: {}};

      expect(result).toEqual(resultProduct);
    });
  });

  describe('[Product] Add, Update & Remove Product', () => {
    it('should add, edit and remove a product', () => {
      const action = new AddNewProductSuccess(product);
      let result = productReducers(initialProductState, action);

      const resultProducts = {selectedProduct: null, products: [product], entities: {}};
      expect(result).toEqual(resultProducts);

      product.name = 'TV';
      product.description = 'Best TV in the world';
      product.category = 'Entertainment';

      const updateAction = new UpdateProductSuccess(product);
      result = productReducers(resultProducts, updateAction);
      expect(result.selectedProduct).toEqual(product);

      const removeAction = new RemoveProductSuccess(1);
      result = productReducers(resultProducts, removeAction);

      expect(result).toEqual({
        selectedProduct: null,
        products: [],
        entities: {}
      });

    });
  });
});
