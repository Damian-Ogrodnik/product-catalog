import { Errors } from 'io-ts';

import { AppError } from './AppError';

export class ResponseDataValidationError extends AppError {
  constructor(public readonly validationErrors: Errors, message: string) {
    super('ValidationError', null, message);
  }
}

export const createResponseDataValidationError = (
  errors: Errors,
  message = 'Invalid response date format',
) => new ResponseDataValidationError(errors, message);
