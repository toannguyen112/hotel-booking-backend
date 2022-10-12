"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("license_permissions", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "lic_permission_id",
      },

      license_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "licenses",
          key: "license_id",
        },
      },

      lic_permission_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      usr_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      biz_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      indi_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      indi_consent_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      indi_pref_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      prod_cate_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      prod_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      loya_prog_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      loya_curr_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      loya_memb_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      loyal_tier_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      benefit_type_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      tier_rules_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      benefit_type_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      benefit_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      voucher_def_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      voucher_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      loya_promo_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      promo_memb_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      promo_curr_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      promo_prod_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      manual_trx_access: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },

      record_owner: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      created_usr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      last_modified_usr: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "last_modified_date",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("license_permissions");
  },
};
