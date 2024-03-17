import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { MODEL_NAME, SCHEMA } from './constants';
import { AttendanceInterface } from './types/attendances';

export type AttendanceCreateInterface = Optional<AttendanceInterface, 'id'>;

export class Attendance extends Model<AttendanceInterface, AttendanceCreateInterface> implements AttendanceInterface {
  id!: number;

  worker_id: number;

  readonly created_at?: Date;

  readonly updated_at?: Date;

  static initModel(sequelize: Sequelize): typeof Attendance {
    Attendance.init(
      {
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        worker_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: MODEL_NAME.ATTENDANCES,
        schema: SCHEMA,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
          {
            unique: false,
            fields: ['worker_id'],
          },
        ],
      }
    );

    return Attendance;
  }
}
