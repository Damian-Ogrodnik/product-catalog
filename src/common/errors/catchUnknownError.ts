import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Either, left } from 'fp-ts/es6/Either';

import { createUnknownError } from './UnkownError';
import { AppError } from './AppError';

export const catchUnknownError = <T>(message: string) =>
  catchError<Either<AppError, T>, Observable<Either<AppError, T>>>(error =>
    of(left(createUnknownError(error, message))),
  );
