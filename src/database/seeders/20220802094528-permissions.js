"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permissions", [
      {
        id: 1,
        perm_name: `dashboard`,
        perm_description: "Thống kê"
      },
      {
        id: 2,
        perm_name: `rooms`,
        perm_description: "Phòng"
      },
      {
        id: 3,
        perm_name: `tenants`,
        perm_description: "Người thuê"
      },
      {
        id: 4,
        perm_name: `users`,
        perm_description: "Người dùng"
      },
      {
        id: 5,
        perm_name: `accounts`,
        perm_description: "Tài khoản"
      },
      {
        id: 6,
        perm_name: `roles`,
        perm_description: "Vai trò"
      },
      {
        id: 7,
        perm_name: `maps`,
        perm_description: "Bản đồ"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
  },
};
