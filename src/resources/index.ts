import config from 'config';
import { initModels } from 'models';
import connectPostgresDB from './postgres';

export default async (app: any) => {
  if (config.postgresSQL.host) {
    const sequelize = await connectPostgresDB();
    initModels(sequelize);
  }
};
