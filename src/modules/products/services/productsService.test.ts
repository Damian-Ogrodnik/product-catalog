import { of } from 'rxjs';

import { HttpService } from 'common/services/HttpService';

import { ProductsService } from './productsService';
import { requestPayloadData } from '../mocks/productsMocks';
import { right } from 'fp-ts/es6/Either';
import { ajax } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { left } from 'fp-ts/lib/Either';
import { createHttpError, ResponseDataValidationError } from 'common/errors';
import { BASE_URL } from 'config/variables';

describe('ProductsService', () => {
  const httpServiceMock = (HttpService as unknown) as jest.Mock<HttpService>;
  let httpService: HttpService;

  beforeEach(() => {
    httpService = new httpServiceMock();
  });

  describe('getProducts service', () => {
    it('should throw validation data error', done => {
      jest.spyOn(httpService, 'get').mockImplementation(() =>
        ajax({ url: BASE_URL }).pipe(
          map(right),
          catchError(() => of(left(createHttpError(500, 'Something went wrong')))),
        ),
      );

      const productsService = new ProductsService(httpService);
      productsService.getProducts(requestPayloadData).subscribe(res => {
        expect(res).toMatchObject(
          left(new ResponseDataValidationError([], 'Invalid response date format')),
        );

        done();
      });
    });
  });
});
