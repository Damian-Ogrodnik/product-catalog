import { createReducer } from 'typesafe-actions';

import { AppAction } from 'config/rootAction';

import * as actions from '../actions/productsActions';
import { FetchProductsPayload, Product, ProductsData, ProductsMeta } from '../../types';

export interface ProductsState {
  isFetchingProducts: boolean;
  items: Product[];
  meta?: ProductsMeta;
  error: string;
  searchDetails: FetchProductsPayload;
}

export const defaultProductsState: ProductsState = {
  items: [],
  meta: undefined,
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
  .handleAction(actions.fetchProductsAsync.success, (state, { payload: { items, meta } }) => ({
    ...state,
    isFetchingProducts: false,
    items,
    meta,
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
