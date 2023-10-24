import { NextFunction, Request, Response } from 'express';
import HttpException from './exception';
 
function ErrorMiddleware(err: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    const metaData = err.metaData;
    const name = err.name;
    
    response
      .status(status)
      .send({
        name,
        status,
        message,
        metaData
      })
  }
   
  export default ErrorMiddleware;