"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("tier_rules", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_tierRule_id",
      },

      t_tierRule_loyTierid: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_tiers",
          key: "t_loyalTier_id",
        },
      },

      t_tierRule_loyid: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_tierRule_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_tierRule_status: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_tierRule_pointFrom: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },

      t_tierRule_pointTo: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },

      t_tierRule_oderFrom: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },

      t_tierRule_oderTo: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },

      t_tierRule_countFrom: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },

      t_tierRule_countTo: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },

      t_tierRule_startDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_tierRule_endDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_tierRule_desc: {
        allowNull: true,
        type: Sequelize.STRING(4000),
      },

      // timestamp
      t_tierRule_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_tierRule_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_tierRule_created_date",
      },

      t_tierRule_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_tierRule_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("tier_rules"),
};
