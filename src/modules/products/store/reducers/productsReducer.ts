import { createReducer } from 'typesafe-actions';

import { AppAction } from 'config/rootAction';

import * as actions from '../actions/productsActions';
import { ProductsData } from '../../types';

export interface ProductsState {
  isFetchingProducts: boolean;
  productsData?: ProductsData;
  searchParse: string;
  isActiveFilter: boolean;
  isPromoFilter: boolean;
  error: string;
}

export const defaultProductsState: ProductsState = {
  isFetchingProducts: false,
  productsData: undefined,
  searchParse: '',
  isActiveFilter: false,
  isPromoFilter: false,
  error: '',
};

export const productsReducer = createReducer<ProductsState, AppAction>(defaultProductsState)
  .handleAction(actions.fetchProductsAsync.request, state => ({
    ...state,
    isFetchingProducts: true,
  }))
  .handleAction(actions.fetchProductsAsync.success, (state, { payload }) => ({
    ...state,
    isFetchingProducts: false,
    products: payload,
  }))
  .handleAction(actions.fetchProductsAsync.failure, (state, { payload }) => ({
    ...state,
    isFetchingProducts: false,
    error: payload.message,
  }));
