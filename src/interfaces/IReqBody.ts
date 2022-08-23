import { Request } from 'express';

export interface IReqBody<T> extends Request {
  body: T;
}
