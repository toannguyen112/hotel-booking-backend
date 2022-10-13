"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const { faker } = require("@faker-js/faker");

    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: `${Math.random()}`,
          name: faker.name.firstName(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
