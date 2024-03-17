import HttpException from './HttpException';
import { ErrorCodes } from './errorCode';

class WorkerAttendedToday extends HttpException {
  constructor() {
    const errorDetail = ErrorCodes.WORKER_ATTENDED_TODAY;
    super(400, errorDetail.MESSAGE, errorDetail.CODE);
  }
}

export default WorkerAttendedToday;
