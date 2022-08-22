import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import { Model } from 'mongoose'
import { mockValidCar, mockValidCarWithId } from '../mocks/cars.mock';

import CarModel from '../../../models/car.model'

describe('Car model Tests', () => {

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(mockValidCarWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Create new car', async () => {
    const carModel = new CarModel();

    const result = await carModel.create(mockValidCar);

    expect(result).to.be.deep.equal(mockValidCarWithId);
  });
});
