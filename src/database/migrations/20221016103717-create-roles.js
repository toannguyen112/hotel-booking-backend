"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("roles", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("roles"),
};
