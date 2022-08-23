import { Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import { IReqBody } from '../interfaces/IReqBody';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public create = async (
    req: IReqBody<ICar>,
    res: Response,
  ) : Promise<void> => {
    const car: ICar = req.body;

    const carCreated: ICar = await this._service.create(car);

    res.status(201).json(carCreated);
  };
}

export default CarController;
