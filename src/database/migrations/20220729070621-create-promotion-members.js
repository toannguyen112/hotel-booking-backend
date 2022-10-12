"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("promotion_members", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_prmMem_id",
      },

      t_prmMem_loyaPromId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_promotions",
          key: "t_loyaPrm_id",
        },
      },

      t_prmMem_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_prmMem_indId: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_maxEarnVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_earnedVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_qualifiedPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_awardedPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_avalPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_totalPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_qualifiedOrds: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_macBurnVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_burnedVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_burnedPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_availVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_availPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_estEarnedPts: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      t_prmMem_joinedDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      // timestamp
      t_prmMem_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_prmMem_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prmMem_created_date",
      },

      t_prmMem_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_prmMem_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("promotion_members"),
};
