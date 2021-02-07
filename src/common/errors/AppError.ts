export class AppError extends Error {
    constructor(
        public readonly name: string,
        public readonly originalError: unknown,
        message: string,
    ) {
        super(message);
    }
}
