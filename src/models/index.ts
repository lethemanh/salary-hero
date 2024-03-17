import { Sequelize } from 'sequelize';
import { Worker } from './workers';
import { Attendance } from './attendances';

export { Worker, Attendance };

export const initModels = (sequelize: Sequelize) => {
  Worker.initModel(sequelize);
  Attendance.initModel(sequelize);
  return {
    Worker,
    Attendance,
  };
};
