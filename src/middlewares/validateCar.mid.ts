import { NextFunction as Next, Request, Response } from 'express';
import { ICar, CarSchema } from '../interfaces/ICar';
import { VehicleSchema } from '../interfaces/IVehicle';

function validateCars(
  req: Request & { body: ICar },
  _res: Response,
  next: Next,
): void {
  try {
    VehicleSchema.parse(req.body);
    CarSchema.parse(req.body);

    next();
  } catch (error: any) {
    error.status = 400;

    next(error);
  }
}

export default validateCars;
