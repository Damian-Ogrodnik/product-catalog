import { createReducer } from 'typesafe-actions';

import { AppAction } from 'config/rootAction';

import * as actions from '../actions/productsActions';
import { FetchProductsPayload, Product, ProductsMeta } from '../../types';

export interface ProductsState {
  isFetchingProducts: boolean;
  items: Product[];
  productsMeta?: ProductsMeta;
  error: string;
  searchDetails: FetchProductsPayload;
}

export const initialProductsState: ProductsState = {
  items: [],
  productsMeta: undefined,
  isFetchingProducts: false,
  error: '',
  searchDetails: {
    search: '',
    limit: 8,
    page: 1,
    promo: false,
    active: true,
  },
};

export const productsReducer = createReducer<ProductsState, AppAction>(initialProductsState)
  .handleAction(actions.fetchProductsAsync.request, state => ({
    ...state,
    isFetchingProducts: true,
  }))
  .handleAction(actions.fetchProductsAsync.success, (state, { payload: { items, meta } }) => ({
    ...state,
    isFetchingProducts: false,
    productsMeta: meta,
    items,
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
