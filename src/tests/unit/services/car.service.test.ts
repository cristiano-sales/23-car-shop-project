import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import CarModel from '../../../models/car.model'
import CarService from '../../../services/car.service'

import { mockValidCar, mockValidCarWithId } from '../mocks/cars.mock'

describe('Car service tests', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel)

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(mockValidCarWithId);
  });

  after(() => {
    sinon.restore();
  })

  it('Create new car', async () => {
    const result = await carService.create(mockValidCar);

    expect(result).to.be.deep.equal(mockValidCarWithId);
  });
});
