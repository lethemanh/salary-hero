import { Response } from 'express';
import fmt from 'utils/formatter';
import CustomRequest from 'utils/rest/request';
import * as service from './service';

const createWorkerAttendance = async (request: CustomRequest, response: Response) => {
  const result = await service.createWorkerAttendance(request.body);
  response.send(fmt.formatResponse(result, Date.now() - request.startTime, 'OK'));
};

export { createWorkerAttendance };
