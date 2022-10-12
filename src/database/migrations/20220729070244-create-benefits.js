"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("benefits", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_benf_id",
      },

      t_benf_benfTypeId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "benefit_types",
          key: "t_benfType_id",
        },
      },

      t_benf_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_benf_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benf_amount: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benf_loyaMemId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_members",
          key: "t_loyalMem_id",
        },
      },

      t_benf_status: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benf_expireDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_benf_issueDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      // timestamp
      t_benf_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_benf_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_benf_created_date",
      },

      t_benf_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_benf_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("benefits"),
};
