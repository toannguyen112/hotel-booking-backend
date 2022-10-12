"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("promotion_currencies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_prmCurr_id",
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

      t_prmCurr_loyaPromId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_promotions",
          key: "t_loyaPrm_id",
        },
      },

      t_prmCurr_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_prmCurr_loyaCurrId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_currencies",
          key: "t_loyalCurr_id",
        },
      },

      t_prmCurr_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmCurr_rule: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmCurr_typeCurr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmCurr_status: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmCurr_exRate: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmCurr_fixedEarnPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      // timestamp
      t_prmCurr_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmCurr_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prmCurr_created_date",
      },

      t_prmCurr_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prmCurr_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("promotion_currencies"),
};
