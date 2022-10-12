"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("loyalty_tiers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_loyalTier_id",
      },

      t_loyalTier_loyid: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_loyalTier_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_loyalTier_priority: {
        default: false,
        type: Sequelize.INTEGER,
      },

      t_loyalTier_status: {
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyalTier_start: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      t_loyalTier_end: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      t_loyalTier_desc: {
        allowNull: false,
        type: Sequelize.STRING(4000),
      },

      // timestamp
      t_loyaTier_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaTier_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyaTier_created_date",
      },

      t_loyaTier_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyaTier_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("loyalty_tiers"),
};
