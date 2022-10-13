"use strict";
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tenants", [
      {
        id: `SCHjww9ud21p1`,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
