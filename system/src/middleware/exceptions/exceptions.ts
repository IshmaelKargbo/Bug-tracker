class HttpException extends Error {
  status: number;
  message: string;
  error?: object;

  constructor(status: number, message: string, error?: object) {
    super(message);
    this.status = status;
    this.message = message;
    this.error = error;
  }
}

export default HttpException;
