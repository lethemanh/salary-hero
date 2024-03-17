import { Router } from 'express';
import workerRouter from './workers';

const router = Router();
router.use('/workers', workerRouter);

export default router;
