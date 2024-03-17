import config from '../../config';

const MODEL_NAME = {
  WORKERS: 'workers',
  ATTENDANCES: 'attendances',
};

const SCHEMA = config.postgresSQL.schema;

export { MODEL_NAME, SCHEMA };
