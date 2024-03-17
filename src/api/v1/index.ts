import { Router } from 'express';
import workerRouter from './workers';
import attendanceRouter from './attendances';

const router = Router();
router.use('/workers', workerRouter);
router.use('/attendances', attendanceRouter);

export default router;
