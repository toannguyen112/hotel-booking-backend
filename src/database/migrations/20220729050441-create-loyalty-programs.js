"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("loyalty_programs", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_loyalProg_id",
      },

      t_schema_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_loyalProg_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalProg_status: {
        type: Sequelize.STRING,
      },

      t_loyalProg_transQuaPt: {
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyalProg_tierReCycle: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalProg_tierStartDate: {
        type: Sequelize.DATE,
      },

      t_loyalProg_lastTierReDate: {
        type: Sequelize.DATE,
      },

      t_loyalProg_nextTierReDate: {
        type: Sequelize.DATE,
      },

      t_loyalProg_desc: {
        type: Sequelize.STRING(4000),
      },

      t_loyalProg_recordOwner: {
        type: Sequelize.STRING,
      },

      t_loyalProg_created_by: {
        type: Sequelize.STRING,
      },

      t_loyalProg_recordOwner: {
        type: Sequelize.STRING,
      },

      t_loyalProg_lastModified_by: {
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyalProg_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyalProg_lastModified_date",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("loyalty_programs");
  },
};
