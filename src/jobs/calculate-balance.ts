import { Worker, Attendance, BalanceHistory, initModels } from 'models';
import { SalaryType } from 'models/types/workers';
import connectPostgresDB from 'resources/postgres';
import { Op } from 'sequelize';

export const calculateBalance = async () => {
  try {
    const sequelize = await connectPostgresDB();
    initModels(sequelize);

    // Query workers in batches and calculate balance of each worker
    const batchSize = 100; // Define batch size
    let skip = 0;

    while (true) {
      const workers = await Worker.findAll({
        limit: batchSize,
        offset: skip,
      });

      if (workers.length === 0) {
        break;
      }

      skip += batchSize;

      for (let i = 0; i < workers.length; i++) {
        const worker = workers[i];
        const endOfDay = new Date().setHours(23, 59, 59, 59);
        const workingDays = await Attendance.count({
          where: {
            worker_id: worker.id,
            created_at: { [Op.lte]: endOfDay },
          },
        });
        let balance = worker.current_balance;
        if (worker?.salary_type === SalaryType.DAILY) {
          balance = workingDays > 0 ? worker.salary * workingDays : 0;
        } else if (worker?.salary_type === SalaryType.MONTHLY) {
          balance = workingDays > 0 ? (worker.salary / 30) * workingDays : 0;
        }

        if (balance === 0 || balance === worker.current_balance) {
          continue;
        }

        // Create balance history when balance was changed
        await BalanceHistory.create({
          worker_id: worker.id,
          old_balance: worker.current_balance,
          new_balance: balance,
        });

        // Update current balance of worker
        await Worker.update(
          {
            current_balance: balance,
          },
          {
            where: {
              id: worker.id,
            },
          }
        );
      }
    }
  } catch (err) {
    console.log('Calculate balance error: ', JSON.stringify(err));
  }
};
