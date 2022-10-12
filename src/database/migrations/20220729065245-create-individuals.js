"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("individuals", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_ind_id",
      },

      // t_ind_bizId: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "accounts",
      //     key: "account_id",
      //   },
      // },

      t_schema_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_ind_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_gender: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_ind_birthday: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      t_ind_gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_age: {
        allowNull: false,
        type: Sequelize.DECIMAL(3, 0),
      },

      t_ind_birthyear: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 0),
      },

      t_ind_CLV: {
        allowNull: false,
        type: Sequelize.DECIMAL(18, 2),
      },

      t_ind_email: {
        allowNull: false,
        type: Sequelize.STRING(245),
      },

      t_ind_phone_1: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_phone_2: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_ctzNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_passport: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_custCode: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      t_ind_fbURL: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      t_ind_zaloOA_id: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      t_ind_custImgURL: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      t_ind_custSrce: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },

      t_ind_addr1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      t_ind_addr2: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_dist: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },

      t_ind_city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },

      t_ind_state: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      t_ind_postcode: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },

      t_ind_country: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },

      t_ind_desc: {
        allowNull: false,
        type: Sequelize.STRING(4000),
      },

      // timestamp
      t_ind_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      t_ind_created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_biz_created_date",
      },

      t_ind_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_ind_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("individuals"),
};
