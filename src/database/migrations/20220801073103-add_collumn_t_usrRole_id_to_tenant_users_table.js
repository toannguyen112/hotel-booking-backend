module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "benefit_types",
          "t_benfType_vchDefId",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "voucher_definitions",
              key: "t_vouchrDef_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "benefit_types",
          "t_benf_vchId",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "vouchers",
              key: "t_vouchr_id",
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "benefit_types",
          "t_benf_loyaPromId",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "loyalty_promotions",
              key: "t_loyaPrm_id",
            },
          },

          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.removeColumn("benefit_types", "t_benfType_vchDefId", { transaction: t }), queryInterface.removeColumn("benefit_types", "t_benf_vchId", { transaction: t }), queryInterface.removeColumn("benefit_types", "t_benf_loyaPromId", { transaction: t })]);
    });
  },
};
