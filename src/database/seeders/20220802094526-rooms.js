"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { faker } = require("@faker-js/faker");
    var data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        id: `${Math.random()}`,
        name: faker.name.firstName(),
      });
    }
    await queryInterface.bulkInsert("rooms", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null);
  },
};
