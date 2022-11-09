"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permissions", [
      {
        id: 1,
        perm_name: `dashboard`,
      },
      {
        id: 2,
        perm_name: `rooms`,
      },
      {
        id: 3,
        perm_name: `get_all_room`,
      },
      {
        id: 4,
        perm_name: `get_all_users`,
      },
      {
        id: 5,
        perm_name: `account`,
      },
      {
        id: 6,
        perm_name: `role`,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
  },
};
