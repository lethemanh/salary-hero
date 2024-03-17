import { Attendance } from 'models';
import { CreateWorkerAttendanceDto } from './dto';
import { Op } from 'sequelize';
import { WorkerAttendedToday } from 'exceptions';

const createWorkerAttendance = async (payload: CreateWorkerAttendanceDto) => {
  try {
    const endOfDay = new Date().setHours(23, 59, 59, 59);
    const attendanceRecords = await Attendance.findAll({
      where: {
        worker_id: payload.workerId,
        created_at: { [Op.lte]: endOfDay },
      },
    });

    if (attendanceRecords?.length) {
      throw new WorkerAttendedToday();
    }

    const newAttendanceRecord = await Attendance.create({
      worker_id: payload?.workerId,
    });

    return newAttendanceRecord;
  } catch (error) {
    throw error;
  }
};

export { createWorkerAttendance };
