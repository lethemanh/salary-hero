import { IsDefined, IsNumber, IsString } from 'class-validator';
import { SalaryType } from 'models/types/workers';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateWorker:
 *       type: object
 *       properties:
 *         workerName:
 *           type: string
 *         salary:
 *           type: number
 *         salaryType:
 *           type: MONTHLY | DAILY
 */
class CreateWorkerDto {
  @IsDefined({ message: 'worker name is missing' })
  @IsString()
  public workerName: string;

  @IsDefined({ message: 'salary is missing' })
  @IsNumber()
  public salary: number;

  @IsDefined({ message: 'salary type is missing' })
  @IsString()
  public salaryType: SalaryType;
}
export { CreateWorkerDto };
