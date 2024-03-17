import config from '../../config';

const MODEL_NAME = {
  WORKERS: 'workers',
  ATTENDANCES: 'attendances',
  BALANCE_HISTORIES: 'balance_histories',
};

const SCHEMA = config.postgresSQL.schema;

export { MODEL_NAME, SCHEMA };
