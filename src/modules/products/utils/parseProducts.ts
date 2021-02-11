import { Either, mapLeft } from 'fp-ts/es6/Either';
import { pipe } from 'fp-ts/es6/pipeable';

import { createResponseDataValidationError, ResponseDataValidationError } from 'common/errors';

import { ProductsData } from '../types';

export const parseProducts = (data: unknown): Either<ResponseDataValidationError, ProductsData> =>
  pipe(ProductsData.decode(data), mapLeft(createResponseDataValidationError));
