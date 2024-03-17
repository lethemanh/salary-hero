import { Router } from 'express';
import { asyncRouteHandler } from 'middlewares';
import { createWorker, getWorkerBalance } from './controller';
const router = Router();

/**
 * @openapi
 * /v1/workers/:
 *   post:
 *     description: Create worker balance
 *     tags:
 *       - Worker balance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateWorker'
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.post('/', asyncRouteHandler(createWorker));

/**
 * @openapi
 * /v1/workers/{workerId}/balance:
 *   get:
 *     description: Get worker balance
 *     tags:
 *       - Worker balance
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.get('/:workerId/balance', asyncRouteHandler(getWorkerBalance));

export default router;
