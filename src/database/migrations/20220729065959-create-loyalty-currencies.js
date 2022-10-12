"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("loyalty_currencies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_loyalCurr_id",
      },

      t_loyalCurr_loyid: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_prmCurr_prodId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "products",
          key: "t_prod_id",
        },
      },

      t_prmCurr_prodCateId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "product_categories",
          key: "t_prodCate_id",
        },
      },

      t_loyalCurr_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalCurr_rule: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalCurr_type: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalCurr_rate: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalCurr_earnPoints: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalCurr_status: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      // timestamp
      t_loyalCurr_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalCurr_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyalCurr_created_date",
      },

      t_loyalCurr_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyalCurr_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("loyalty_currencies"),
};
