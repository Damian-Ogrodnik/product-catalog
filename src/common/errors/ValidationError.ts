import { Errors } from 'io-ts';

import { AppError } from './AppError';

export class ValidationError extends AppError {
  constructor(public readonly validationErrors: Errors, message: string) {
    super('ValidationError', null, message);
  }
}

export const createValidationError = (errors: Errors, message = 'Failed to parse input') =>
  new ValidationError(errors, message);
