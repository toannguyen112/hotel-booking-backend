"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("licenses", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "license_id",
      },

      license_name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      number_users: {
        allowNull: true,
        type: Sequelize.DECIMAL(3, 0),
      },

      limit_storage: {
        allowNull: true,
        type: Sequelize.DECIMAL(10, 0),
      },

      limit_contact: {
        allowNull: true,
        type: Sequelize.DECIMAL(10, 0),
      },

      limit_msg: {
        allowNull: true,
        type: Sequelize.DECIMAL(10),
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
    await queryInterface.dropTable("licenses");
  },
};
