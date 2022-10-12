"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("product_categories", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_prodCate_id",
      },

      t_loyalProg_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_schema_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_prodCate_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prodCate_code: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prodCate_brand: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },

      t_prodCate_desc: {
        allowNull: true,
        type: Sequelize.STRING(4000),
      },

      t_prodCate_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prodCate_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prodCate_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prodCate_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prodCate_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("product_categories"),
};
