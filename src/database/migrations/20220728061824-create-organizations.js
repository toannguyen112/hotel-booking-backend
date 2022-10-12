"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("organizations", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "org_id",
      },

      crm_org_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      crm_contact_id: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      primary_contact_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      primary_contact_email: {
        allowNull: true,
        type: Sequelize.STRING(300),
      },

      org_name: {
        allowNull: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("organizations");
  },
};
