import { Sequelize } from 'sequelize';
import { Worker } from './workers';

export { Worker };

export const initModels = (sequelize: Sequelize) => {
  Worker.initModel(sequelize);
  return {
    Worker,
  };
};
