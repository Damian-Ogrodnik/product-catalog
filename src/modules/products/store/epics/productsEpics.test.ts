import { StateObservable, ActionsObservable } from 'redux-observable';
import { left, right } from 'fp-ts/es6/Either';
import { Subject, of } from 'rxjs';

import { AppState } from 'config/rootStore';
import { AppError, createHttpError } from 'common/errors';

import { ProductsService } from '../../services/productsService';
import { initialProductsState } from '../reducers';
import { requestPayloadData, productsDataMock } from '../../mocks';
import { productsEpicFactory } from './productsEpics';
import * as actions from '../actions/productsActions';

describe('Products epics', () => {
  const productsServiceMock = ProductsService as jest.Mock<ProductsService>;
  const mockState = new StateObservable<AppState>(new Subject(), {
    products: initialProductsState,
  });
  let productsService: ProductsService;

  beforeEach(() => {
    productsService = new productsServiceMock();
  });

  it('should fetch products', done => {
    jest
      .spyOn(productsService, 'getProducts')
      .mockImplementation(() => of(right(productsDataMock)));

    const productsEpicFactoryInstance = productsEpicFactory(productsService);
    const action$ = of(actions.fetchProductsAsync.request(requestPayloadData));

    productsEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
      expect(res).toMatchObject(actions.fetchProductsAsync.success(productsDataMock));

      done();
    });
  });

  it('should emit error', done => {
    jest
      .spyOn(productsService, 'getProducts')
      .mockImplementation(() => of(left(createHttpError(400, 'Failed to execute http request'))));

    const productsEpicFactoryInstance = productsEpicFactory(productsService);
    const action$ = of(actions.fetchProductsAsync.request(requestPayloadData));

    productsEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
      expect(res).toEqual(
        actions.fetchProductsAsync.failure(
          new AppError('HttpError:', null, 'Failed to execute http request'),
        ),
      );

      done();
    });
  });
});
