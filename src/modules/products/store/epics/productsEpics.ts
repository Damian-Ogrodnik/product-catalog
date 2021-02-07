import { combineEpics } from 'redux-observable';
import { map, pluck, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { fold } from 'fp-ts/es6/Either';

import { Epic } from 'config/rootStore';
import { AppError } from 'common/errors';

import { ProductsData } from '../../types';
import * as actions from '../actions/productsActions';
import { ProductsService } from 'modules/products/services';

export const productsEpicFactory = (productsService: ProductsService): Epic => {
  const getProducts: Epic = action$ =>
    action$.pipe(
      filter(isActionOf(actions.fetchProductsAsync.request)),
      pluck('payload'),
      switchMap(payload => productsService.getProducts(payload)),
      map(
        fold<AppError, ProductsData, actions.ProductsActions>(
          actions.fetchProductsAsync.failure,
          actions.fetchProductsAsync.success,
        ),
      ),
    );
  return combineEpics(getProducts);
};
