import {Product} from '../../models/product';

export interface IProductState {
  selectedProduct: Product;
  products: Product[];
  entities: any;
}

export const initialProductState: IProductState = {
  selectedProduct: null,
  products: [],
  entities: {},
};
