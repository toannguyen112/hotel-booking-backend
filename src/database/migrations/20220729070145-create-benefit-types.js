"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("benefit_types", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_benfType_id",
      },

      t_benfType_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_benfType_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benfType_type: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benfType_status: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benfType_amount: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benfType_desc: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      // timestamp
      t_benfType_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benfType_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_benfType_created_date",
      },

      t_benfType_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_benfType_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("benefit_types"),
};
