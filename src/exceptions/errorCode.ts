export interface CustomError {
  CODE: string;
  MESSAGE: string;
}

export const ERROR_CODES = {
  DUPLICATED: 11000,
};

export const ErrorCodes: { [key: string]: CustomError } = {
  API_KEY_UNAUTHORIZED: {
    CODE: 'UNAUTHORIZED',
    MESSAGE: 'API Key authentication failed!',
  },
  VALIDATION_ERROR: {
    CODE: 'VALIDATION_ERROR',
    MESSAGE: 'Validation failed error',
  },
  WORKER_WITH_ID_NOT_FOUND: {
    CODE: 'WORKER_WITH_ID_NOT_FOUND',
    MESSAGE: 'Worker with given id not found',
  },
  SERVICE_ERROR: {
    CODE: 'SERVICE_ERROR',
    MESSAGE: 'Obtained error from external service. Please check the logs.',
  },
  NOT_FOUND: {
    CODE: 'NOT_FOUND',
    MESSAGE: 'Not found',
  },
  BAD_REQUEST: {
    CODE: 'BAD_REQUEST',
    MESSAGE: 'Bad request',
  },
  WORKER_ATTENDED_TODAY: {
    CODE: 'WORKER_ATTENDED_TODAY',
    MESSAGE: 'Worker have attended today',
  },
};
