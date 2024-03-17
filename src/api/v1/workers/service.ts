import { Worker } from 'models';
import { WorkerNotFound } from 'exceptions';
import { CreateWorkerDto } from './dto';

const createWorker = async (payload: CreateWorkerDto) => {
  try {
    const newWorkerRecord = await Worker.create({
      worker_name: payload?.workerName,
      salary: payload?.salary,
      salary_type: payload?.salaryType,
    });

    return newWorkerRecord;
  } catch (error) {
    throw error;
  }
};

const getWorkerBalance = async (workerId: number) => {
  try {
    const worker = await Worker.findOne({
      where: {
        id: workerId,
      },
    });

    if (!worker) {
      throw new WorkerNotFound();
    }

    return {
      balance: worker.current_balance,
    };
  } catch (error) {
    throw error;
  }
};

export { createWorker, getWorkerBalance };
