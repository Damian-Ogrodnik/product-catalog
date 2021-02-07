import { HttpService } from 'common/services/HttpService';
import { ProductsService } from 'modules/products/services';

import { BASE_URL } from './variables';

export const httpService = new HttpService(BASE_URL);
export const productsService = new ProductsService(httpService);

export const rootService = {
  httpService,
  productsService,
} as const;

export type RootService = typeof rootService;
