import { createSelector } from 'reselect';

import { AppState } from 'config/rootStore';

export const getProductsState = (state: AppState) => state.products;
export const getSearchDetails = createSelector(getProductsState, state => state.searchDetails);
export const getProducts = createSelector(getProductsState, state => state.items);
export const getProductsMeta = createSelector(getProductsState, state => state.productsMeta);
export const getIsFetchingProducts = createSelector(
  getProductsState,
  state => state.isFetchingProducts,
);
