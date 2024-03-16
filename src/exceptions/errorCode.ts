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
  USER_WITH_ID_NOT_FOUND: {
    CODE: 'USER_WITH_ID_NOT_FOUND',
    MESSAGE: 'User with given id not found',
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
};
