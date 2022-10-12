"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("voucher_definitions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_vouchrDef_id",
      },

      t_vouchrDef_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_vouchrDef_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_vchDefType: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_Status: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_loyaPromId: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_vchType: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_productPromotion: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_disctPerc: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchrDef_disctAmt: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchrDef_maxdisctAmt: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchrDef_PtsToBurn: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchrDef_startDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_vouchrDef_endDate: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchrDef_extendDate: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_vouchrDef_vchDuration: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_maxIssueVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_vchPrefix: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_vchSuffix: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_desc: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      // timestamp
      t_vouchrDef_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_vouchrDef_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_vouchrDef_created_date",
      },

      t_vouchrDef_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_vouchrDef_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("voucher_definitions"),
};
