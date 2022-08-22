import mongoose from 'mongoose';

import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: mongoose.Model<T>;

  constructor(model:mongoose.Model<T>) {
    this._model = model;
  }

  public create(object: T): Promise<T> {
    return this._model.create({ ...object });
  }

  public async read(): Promise<Array<T>> {
    return this._model.find();
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!mongoose.isValidObjectId(_id)) throw new Error('Invalid mongo Id'); 

    return this._model.findOne({ _id });
  }

  public async update(_id: string, object: T): Promise<T | null> {
    return this._model.findByIdAndUpdate(
      { _id },
      { ...object } as mongoose.UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<T | null> {
    if (!mongoose.isValidObjectId(_id)) throw new Error('InvalidMongoId');

    return this._model.findByIdAndRemove({ _id });
  }
}

export default MongoModel;
