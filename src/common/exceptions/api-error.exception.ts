import { HttpException } from '@nestjs/common';

interface ApiErrorOptions {
  message: string;
  statusCode: number;
  errors?: any[];
}

export class ApiErrorException extends HttpException {
  constructor({ message, statusCode, errors = [] }: ApiErrorOptions) {
    super(
      {
        message,
        errors,
      },
      statusCode,
    );
  }
}
