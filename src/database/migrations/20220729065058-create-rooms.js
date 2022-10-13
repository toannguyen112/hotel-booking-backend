"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("rooms", {
      id: {
        unique: true,
        primaryKey: true,
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

  down: (queryInterface) => queryInterface.dropTable("rooms"),
};
