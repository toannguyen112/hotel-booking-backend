"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tenants", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_schema_id",
      },

      t_schName: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_schStart_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_schEnd_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_sch_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_sch_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_sch_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_sch_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_sch_lastModified_date",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tenants");
  },
};
