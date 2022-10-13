"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admins", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },

      usr_username: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      usr_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      is_super_admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admins");
  },
};
