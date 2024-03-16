import { Router } from 'express';
import { asyncRouteHandler } from 'middlewares';
import { checkHealth } from './controller';

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     description: Check health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.get('/', asyncRouteHandler(checkHealth));

export default router;
