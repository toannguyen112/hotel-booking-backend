"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("room_categories", {
      id: {
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prodCate_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prodCate_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("room_categories"),
};
