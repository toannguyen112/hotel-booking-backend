"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tenants", [
      {
        id: 1,
        username: `tenant 1`,
        password: `123`,
      },
      {
        id: 2,
        username: `tenant 2`,
        password: `123`,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
