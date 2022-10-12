"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("individual_preferences", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_indPrf_id",
      },

      t_indPrf_contactId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "individuals",
          key: "t_ind_id",
        },
      },

      t_indPrf_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_indPrf_genPro: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indPrf_specificPro: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indPrf_holiPro: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indPrf_eventNoti: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      // timestamp
      t_indPrf_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_indPrf_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_indPrf_created_date",
      },

      t_indPrf_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_indPrf_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("individual_preferences"),
};
