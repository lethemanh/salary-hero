import { Response } from 'express';
import fmt from 'utils/formatter';
import CustomRequest from 'utils/rest/request';
import * as service from './service';

const createWorker = async (request: CustomRequest, response: Response) => {
  const result = await service.createWorker(request.body);
  response.send(fmt.formatResponse(result, Date.now() - request.startTime, 'OK'));
};

const getWorkerBalance = async (request: CustomRequest, response: Response) => {
  const result = await service.getWorkerBalance(Number(request.params?.workerId));
  response.send(fmt.formatResponse(result, Date.now() - request.startTime, 'OK'));
};

export { createWorker, getWorkerBalance };
