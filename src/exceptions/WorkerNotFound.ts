import HttpException from './HttpException';
import { ErrorCodes } from './errorCode';

class WorkerNotFound extends HttpException {
  constructor() {
    const errorDetail = ErrorCodes.WORKER_WITH_ID_NOT_FOUND;
    super(400, errorDetail.MESSAGE, errorDetail.CODE);
  }
}

export default WorkerNotFound;
