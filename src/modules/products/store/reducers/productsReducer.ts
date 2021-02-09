import { createReducer } from 'typesafe-actions';

import { AppAction } from 'config/rootAction';

import * as actions from '../actions/productsActions';
import { FetchProductsPayload, ProductsData } from '../../types';

export interface ProductsState {
  isFetchingProducts: boolean;
  productsData?: ProductsData;
  error: string;
  searchDetails: FetchProductsPayload;
}

export const defaultProductsState: ProductsState = {
  productsData: undefined,
  isFetchingProducts: false,
  error: '',
  searchDetails: {
    search: '',
    limit: 8,
    page: 1,
    promo: false,
    active: false,
  },
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
  }))
  .handleAction(actions.setSearchDetails, (state, { payload }) => ({
    ...state,
    searchDetails: payload,
  }));
