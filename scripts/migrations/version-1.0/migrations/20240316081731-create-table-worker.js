'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable(
        'workers',
        {
          id: {
            type: Sequelize.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
          },
          worker_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          salary: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false,
          },
          salary_type: {
            type: Sequelize.DataTypes.ENUM('DAILY', 'MONTHLY'),
            allowNull: false,
          },
          current_balance: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: 0,
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
      console.log('CREATE TABLE WORKERS SUCCESS');

      await queryInterface.addIndex({ tableName: 'workers', schema: process.env.POSTGRES_SCHEMA }, ['salary_type'], {
        name: 'idx-workers-salary_type',
      });

      console.log('CREATE INDEX OF TABLE WORKERS SUCCESS');
    } catch (error) {
      console.error(`CREATE WORKERS ERROR: ${JSON.stringify(error)}`);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'workers',
      schema: process.env.POSTGRES_SCHEMA,
    });
  },
};
