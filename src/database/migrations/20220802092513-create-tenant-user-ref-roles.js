"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("tenant_ref_tenant_user_roles", {
      t_usr_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "tenant_users",
          key: "t_usr_id",
        },
      },

      t_usrRole_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: "tenant_user_role_permissions",
          key: "t_usrRole_id",
        },
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("tenant_ref_tenant_user_roles"),
};
