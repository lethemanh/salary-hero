import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { MODEL_NAME, SCHEMA } from './constants';
import { BalanceHistoryInterface } from './types/balanceHistories';

export type BalanceHistoryCreateInterface = Optional<BalanceHistoryInterface, 'id'>;

export class BalanceHistory
  extends Model<BalanceHistoryInterface, BalanceHistoryCreateInterface>
  implements BalanceHistoryInterface
{
  id!: number;

  worker_id: number;

  old_balance: number;

  new_balance: number;

  readonly created_at?: Date;

  readonly updated_at?: Date;

  static initModel(sequelize: Sequelize): typeof BalanceHistory {
    BalanceHistory.init(
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
        old_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        new_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: MODEL_NAME.BALANCE_HISTORIES,
        schema: SCHEMA,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
          {
            unique: false,
            fields: ['worker_id'],
          },
          {
            unique: false,
            fields: ['created_at'],
          },
        ],
      }
    );

    return BalanceHistory;
  }
}
