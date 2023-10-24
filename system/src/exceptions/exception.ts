import { ErrorCode } from "./code";

class HttpException extends Error {
  public status: number;
  public message: string;
  public metaData?: any;

  constructor(code: string = ErrorCode.UnknownError, message: string, metaData?: any) {
    super(code);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = code;
    this.status = 500;
    this.message = message;
    this.metaData = metaData;

    switch (code) {
      case ErrorCode.BadRequest:
        this.status = 400;
        break;
      case ErrorCode.Unauthorized:
        this.status = 401;
        break;
      case ErrorCode.Forbidden:
        this.status = 403;
        break;
      case ErrorCode.NotFound:
        this.status = 404;
        break;
      case ErrorCode.MethodNotAllowed:
        this.status = 405;
        break;
      case ErrorCode.NotAcceptable:
        this.status = 406;
        break;
      case ErrorCode.MisdirectedRequest:
        this.status = 421;
        break;
      default:
        this.status = 500;
        break;
    }
  }
}

export default HttpException;
