"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("business", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_biz_id",
      },

      t_schema_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_biz_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_biz_typeAcc: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      // t_biz_parentAcc__r: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "accounts",
      //     key: "account_id",
      //   },
      // },

      // t_biz_mainInd: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "contacts",
      //     key: "contact_id",
      //   },
      // },

      t_biz_email: {
        allowNull: true,
        type: Sequelize.STRING(254),
      },

      t_biz_phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_addr1: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_addr2: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_dist: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_city: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      t_biz_state: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      t_biz_postcode: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_country: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      t_biz_website: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_taxCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_desc: {
        allowNull: true,
        type: Sequelize.STRING(4000),
      },

      // timestamp
      t_biz_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_biz_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_biz_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_biz_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("business"),
};
