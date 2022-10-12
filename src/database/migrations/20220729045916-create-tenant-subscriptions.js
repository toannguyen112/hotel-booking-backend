"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tenant_subscriptions", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "tenant_id",
      },

      t_noUsr: {
        allowNull: true,
        type: Sequelize.DECIMAL(18, 0),
      },

      t_contactUsage: {
        allowNull: true,
        type: Sequelize.DECIMAL(10, 0),
      },

      t_messUsage: {
        allowNull: true,
        type: Sequelize.DECIMAL(10),
      },

      t_activateStatus: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_activateStart_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_activateCancel_date: {
        allowNull: true,
        type: Sequelize.DECIMAL(10),
      },

      t_language: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_location: {
        allowNull: true,
        type: Sequelize.DECIMAL(10),
      },

      t_purchaseOrder_no: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },

      t_contractNo: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },

      t_contractStart_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_contractCancel_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_database_version: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_app_version: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      t_deploymentTime: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      record_owner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      created_usr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      last_modified_usr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "last_modified_date",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tenant_subscriptions");
  },
};
