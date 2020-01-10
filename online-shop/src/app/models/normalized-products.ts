import {Product} from './product';

export class NormalizedProducts {
  entities: {
    data: Product[];
    ui: {
      allIds: number[];
    }
  };
}
