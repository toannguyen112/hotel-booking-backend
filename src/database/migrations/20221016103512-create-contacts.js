"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("contacts", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      data: {
        type: Sequelize.TEXT,
      },

      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      user_agent: {
        type: Sequelize.STRING,
      },

      ip_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      request_url: {
        type: Sequelize.STRING,
      },

      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("contacts"),
};
