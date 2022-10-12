"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tenant_users", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_usr_id",
      },

      t_schema_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_usr_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_usrName: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_Password: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_Email: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_Phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_usr_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_usr_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_usr_lastModified_date",
      },

      tokens: {
        allowNull: true,
        type: Sequelize.JSON,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tenant_users");
  },
};
