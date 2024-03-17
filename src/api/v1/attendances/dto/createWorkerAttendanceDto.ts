import { IsDefined, IsNumber } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateWorkerAttendance:
 *       type: object
 *       properties:
 *         workerId:
 *           type: number
 */
class CreateWorkerAttendanceDto {
  @IsDefined({ message: 'worker id is missing' })
  @IsNumber()
  public workerId: number;
}
export { CreateWorkerAttendanceDto };
