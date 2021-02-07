import { Either, mapLeft } from 'fp-ts/es6/Either';
import { pipe } from 'fp-ts/es6/pipeable';

import { createValidationError, ValidationError } from 'common/errors';

import { ProductsData } from '../types';

export const parseProducts = (data: unknown): Either<ValidationError, ProductsData> =>
  pipe(ProductsData.decode(data), mapLeft(createValidationError));
