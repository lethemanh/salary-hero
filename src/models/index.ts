import { Sequelize } from 'sequelize';
import { Worker } from './workers';
import { Attendance } from './attendances';
import { BalanceHistory } from './balanceHistories';

export { Worker, Attendance, BalanceHistory };

export const initModels = (sequelize: Sequelize) => {
  Worker.initModel(sequelize);
  Attendance.initModel(sequelize);
  BalanceHistory.initModel(sequelize);
  return {
    Worker,
    Attendance,
    BalanceHistory,
  };
};
