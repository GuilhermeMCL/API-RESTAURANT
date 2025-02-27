

export class AppError {
    constructor(public message: string, public statusCode: number) {
        this.statusCode = statusCode;
        this.message = message;
    }
}