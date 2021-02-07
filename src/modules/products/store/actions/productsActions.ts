import { createAsyncAction, ActionType } from 'typesafe-actions';

import { FetchProductsPayload } from '../../types';
import { AppError } from 'common/errors';

export const fetchProductsAsync = createAsyncAction(
  'GET_PRODUCTS_REQUESTED',
  'GET_PRODUCTS_SUCCEED',
  'GET_PRODUCTS_FAILED',
)<FetchProductsPayload, any, AppError>();

const productsActions = {
  fetchProductsAsync: fetchProductsAsync,
};

export type ProductsActions = ActionType<typeof productsActions>;
