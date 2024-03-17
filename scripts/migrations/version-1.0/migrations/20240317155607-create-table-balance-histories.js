'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable(
        'balance_histories',
        {
          id: {
            type: Sequelize.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
          },
          worker_id: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
          },
          old_balance: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false,
          },
          new_balance: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false,
          },
          created_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
          },
          updated_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
          },
        },
        { schema: process.env.POSTGRES_SCHEMA }
      );
      console.log('CREATE TABLE BALANCE HISTORIES SUCCESS');

      await queryInterface.addIndex(
        { tableName: 'balance_histories', schema: process.env.POSTGRES_SCHEMA },
        ['worker_id'],
        {
          name: 'idx-balance_histories-worker_id',
        }
      );

      await queryInterface.addIndex(
        { tableName: 'balance_histories', schema: process.env.POSTGRES_SCHEMA },
        ['created_at'],
        {
          name: 'idx-balance_histories-created_at',
        }
      );

      console.log('CREATE INDEX OF TABLE BALANCE HISTORIES SUCCESS');
    } catch (error) {
      console.error(`CREATE BALANCE HISTORIES ERROR: ${JSON.stringify(error)}`);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'balance_histories',
      schema: process.env.POSTGRES_SCHEMA,
    });
  },
};
