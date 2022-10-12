"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "usr_id",
      },

      usr_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      usr_email: {
        allowNull: false,
        type: Sequelize.STRING(254),
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

      record_owner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      created_usr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      last_modified_usr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "last_modified_date",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
