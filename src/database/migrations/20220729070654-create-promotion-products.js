"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("promotion_products", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_prmPrd_id",
      },

      t_prmPrd_prodId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "products",
          key: "t_prod_id",
        },
      },

      t_prmPrd_prodCateId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "product_categories",
          key: "t_prodCate_id",
        },
      },

      t_prmPrd_loyaPromId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_promotions",
          key: "t_loyaPrm_id",
        },
      },

      t_prmPrd_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_prmPrd_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmPrd_burnPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      // timestamp
      t_prmPrd_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmPrd_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prmPrd_created_date",
      },

      t_prmPrd_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prmPrd_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("promotion_products"),
};
