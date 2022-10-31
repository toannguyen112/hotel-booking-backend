"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("admin_permissions", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      permission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("admin_permissions"),
};
