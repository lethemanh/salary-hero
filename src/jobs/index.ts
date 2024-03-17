import schedule from 'node-schedule';
import { calculateBalance } from './calculate-balance';
import config from 'config';

schedule.scheduleJob(config.job.calculateBalanceTime, async () => {
  await calculateBalance();
});
