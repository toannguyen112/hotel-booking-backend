module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "tenant_users",
          "t_usrRole_id",
          {
            allowNull: true,
            type: Sequelize.STRING,
            references: {
              model: "tenant_user_role_permissions",
              key: "t_usrRole_id",
            },
          },

          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.removeColumn("tenant_users", "t_usrRole_id", { transaction: t })]);
    });
  },
};
