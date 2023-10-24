import { NextFunction, Request, Response } from 'express';
import HttpException from './exceptions';
 
function ErrorMiddleware(err: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    const error = err.error;
    
    response
      .status(status)
      .send({
        status,
        message,
        error
      })
  }
   
  export default ErrorMiddleware;