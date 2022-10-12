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
        field: "t_prod_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prod_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("rooms"),
};
