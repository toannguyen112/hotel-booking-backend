"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("loyalty_members", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_loyalMem_id",
      },

      t_loyalMem_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_loyalMem_contactid: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmCurr_prodCateId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "product_categories",
          key: "t_prodCate_id",
        },
      },

      // timestamp
      t_loyalMem_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyalMem_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyalMem_created_date",
      },

      t_loyalMem_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyalMem_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("loyalty_members"),
};
