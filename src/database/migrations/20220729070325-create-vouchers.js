"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("vouchers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_vouchr_id",
      },

      t_vouchr_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_vchType: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_status: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_PtsToBurn: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchr_disctedVal: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_disctedPerc: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchr_maxDisctedVal: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchr_startDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_vouchr_endDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_vouchr_extDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_vouchr_usedDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_vouchr_issuedSrc: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_vchCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_usedSrc: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchr_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_vouchr_created_date",
      },

      t_vouchr_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_vouchr_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("vouchers"),
};
