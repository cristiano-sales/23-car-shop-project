import { model as createModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongo.model';

const carMongooseSchema = new Schema<ICar>({
  buyValue: Number,
  color: String,
  doorsQty: Number,
  model: String,
  seatsQty: Number,
  status: Boolean,
  year: Number,
});

class Car extends MongoModel<ICar> {
  constructor(model = createModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car;
