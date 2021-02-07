import { AppError } from './AppError';

export class UnknownError extends AppError {
    constructor(public readonly originalError: unknown, message: string) {
        super('UnknownError', originalError, message);
    }
}

export const createUnknownError = (originalError: unknown, message = 'Unknown error occured') =>
    new UnknownError(originalError, message);
