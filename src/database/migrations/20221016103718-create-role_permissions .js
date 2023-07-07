"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("role_permissions", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'SET NULL',
      },
      permission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'SET NULL',
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

  down: (queryInterface) => queryInterface.dropTable("role_permissions"),
};
