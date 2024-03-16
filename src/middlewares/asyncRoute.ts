import { ErrorCodes, HttpException } from 'exceptions';
import { NextFunction, Response } from 'express';
import RequestWithUser from 'utils/rest/request';

export const asyncRouteHandler = (fn: (arg0: RequestWithUser, arg1: Response, arg2: NextFunction) => any) => {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error.status !== 500) {
        next(error);
      } else {
        next(new HttpException(500, ErrorCodes.SERVICE_ERROR.MESSAGE, ErrorCodes.SERVICE_ERROR.CODE));
      }
    }
  };
};
