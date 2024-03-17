import { Router } from 'express';
import { asyncRouteHandler } from 'middlewares';
import { createWorkerAttendance } from './controller';
const router = Router();

/**
 * @openapi
 * /v1/attendances/:
 *   post:
 *     description: Create worker attendance
 *     tags:
 *       - Attendance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateWorkerAttendance'
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.post('/', asyncRouteHandler(createWorkerAttendance));

export default router;
