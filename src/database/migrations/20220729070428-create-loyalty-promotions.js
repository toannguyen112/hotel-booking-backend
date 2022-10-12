"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("loyalty_promotions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_loyaPrm_id",
      },

      t_loyaPrm_loyaProgId: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "loyalty_programs",
          key: "t_loyalProg_id",
        },
      },

      t_loyaPrm_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_promType: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_promProdCate: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_promProd: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_promStartDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_loyaPrm_promEndDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_loyaPrm_status: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_priority: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      t_loyaPrm_earnProm: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      t_loyaPrm_startEarnDate: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      t_loyaPrm_endEarnDate: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      t_loyaPrm_maxEarnPts: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      t_loyaPrm_startBurnDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_loyaPrm_endBurnDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      t_loyaPrm_maxBurnPts: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      t_loyaPrm_maxVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_issuedVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_usedVch: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_transferPts: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      t_loyaPrm_desc: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      // timestamp
      t_loyaPrm_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_loyaPrm_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyaPrm_created_date",
      },

      t_loyaPrm_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_loyaPrm_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("loyalty_promotions"),
};
