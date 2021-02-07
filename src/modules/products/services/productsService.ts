import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { chain, Either, map as mapEither } from 'fp-ts/es6/Either';

import { AppError } from 'common/errors';
import { HttpService } from 'common/services';
import { apiEndpoints } from 'config/variables';

import { parseProducts } from '../utils';
import { FetchProductsPayload, ProductsData } from '../types';

export class ProductsService {
  public constructor(private readonly httpService: HttpService) {}

  public getProducts(
    fetchProductsPayload: FetchProductsPayload,
  ): Observable<Either<AppError, ProductsData>> {
    return this.httpService
      .get({ url: apiEndpoints.products, params: { ...fetchProductsPayload } })
      .pipe(
        map(mapEither(({ response }) => response)),
        map(chain<AppError, unknown, ProductsData>(parseProducts)),
      );
  }
}
