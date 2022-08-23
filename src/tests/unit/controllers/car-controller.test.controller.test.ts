import * as sinon from 'sinon';
import chai from 'chai';

import { IReqBody } from '../../../interfaces/IReqBody';
import { ICar } from '../../../interfaces/ICar';
import { Response } from 'express';

import CarModel from '../../../models/car.model';
import CarService from '../../../services/car.service';
import CarController from '../../../controllers/car.controller';

import chaiHttp = require('chai-http');

import { mockValidCarWithId, mockValidCar } from '../mocks/cars.mock'


chai.use(chaiHttp);

const { expect } = chai;

describe('Car controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const request = {} as IReqBody<ICar>

  const response = {} as Response

  before(() => {
    sinon
    .stub(carService, 'create')
    .resolves(mockValidCarWithId);

    response.status = sinon.stub().returns(response)
    response.json = sinon.stub().returns(response)
    request.body = mockValidCar
  });

  after(() => {
    sinon.restore();
  })

  it('Create new car',  async () => {
    await carController.create(request, response);

    expect((response.status as sinon.SinonStub).calledWith(201)).to.be.true;
  });

});
