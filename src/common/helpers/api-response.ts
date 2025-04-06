export class ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
  success: boolean;

  constructor({
    data,
    message,
    statusCode,
  }: {
    data: T;
    message: string;
    statusCode: number;
  }) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.success = statusCode < 400;
  }
}
