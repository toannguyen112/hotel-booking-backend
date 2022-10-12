module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "tenant_subscriptions",
          "org_id",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "organizations",
              key: "org_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "tenant_subscriptions",
          "t_license_id",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "licenses",
              key: "license_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "tenant_subscriptions",
          "t_schema_id",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "tenants",
              key: "t_schema_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "tenant_subscriptions",
          "t_usrCreated",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "users",
              key: "usr_id",
            },
          },

          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.removeColumn("tenant_subscriptions", "org_id", { transaction: t }), queryInterface.removeColumn("tenant_subscriptions", "t_license_id", { transaction: t }), queryInterface.removeColumn("tenant_subscriptions", "t_schema_id", { transaction: t }), queryInterface.removeColumn("tenant_subscriptions", "t_usrCreated", { transaction: t })]);
    });
  },
};
