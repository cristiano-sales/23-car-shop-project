import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public create = async (
    req: Request & { body: ICar },
    res: Response,
  ) => {
    const car = req.body;

    const carCreated: ICar = await this._service.create(car);

    res.status(201).json(carCreated);
  };
}

export default CarController;
