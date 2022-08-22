import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class Car {
  constructor(private _model: IModel<ICar>) { }

  public async create(object: ICar): Promise<ICar> {
    return this._model.create(object);
  }
}

export default Car;
