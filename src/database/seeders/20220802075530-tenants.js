"use strict";
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tenants", [
      {
        id: 1,
        username: `admin`,
        password: `123`,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
