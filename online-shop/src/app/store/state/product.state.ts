import {Product} from '../../models/product';

export interface IProductState {
  selectedProduct: Product;
  products: Product[];
}

export const initialProductState: IProductState = {
  selectedProduct: null,
  products: []
};
