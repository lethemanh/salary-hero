'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable(
        'attendances',
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
      console.log('CREATE TABLE ATTENDANCES SUCCESS');

      await queryInterface.addIndex({ tableName: 'attendances', schema: process.env.POSTGRES_SCHEMA }, ['worker_id'], {
        name: 'idx-attendances-worker_id',
      });

      await queryInterface.addIndex({ tableName: 'attendances', schema: process.env.POSTGRES_SCHEMA }, ['created_at'], {
        name: 'idx-attendances-created_at',
      });

      console.log('CREATE INDEX OF TABLE ATTENDANCES SUCCESS');
    } catch (error) {
      console.error(`CREATE ATTENDANCES ERROR: ${JSON.stringify(error)}`);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'attendances',
      schema: process.env.POSTGRES_SCHEMA,
    });
  },
};
