"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("files", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      filename: {
        type: Sequelize.STRING,
      },

      extension: {
        type: Sequelize.STRING,
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

  down: (queryInterface) => queryInterface.dropTable("files"),
};
