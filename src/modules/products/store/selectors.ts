import { createSelector } from 'reselect';

import { AppState } from 'config/rootStore';

export const getProductsState = (state: AppState) => state.products;
export const getSearchDetails = createSelector(getProductsState, state => state.searchDetails);
