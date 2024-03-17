import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { MODEL_NAME, SCHEMA } from './constants';
import { SalaryType, WorkerInterface } from './types/workers';

export type WorkerCreateInterface = Optional<WorkerInterface, 'id'>;

export class Worker extends Model<WorkerInterface, WorkerCreateInterface> implements WorkerInterface {
  id!: number;

  worker_name: string;

  salary: number;

  salary_type: SalaryType;

  current_balance: number;

  readonly created_at?: Date;

  readonly updated_at?: Date;

  static initModel(sequelize: Sequelize): typeof Worker {
    Worker.init(
      {
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        worker_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        salary: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        salary_type: {
          type: DataTypes.ENUM(SalaryType.DAILY, SalaryType.MONTHLY),
          allowNull: false,
        },
        current_balance: {
          type: DataTypes.DECIMAL,
          allowNull: true,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: MODEL_NAME.WORKERS,
        schema: SCHEMA,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
          {
            unique: false,
            fields: ['salary_type'],
          },
        ],
      }
    );

    return Worker;
  }
}
