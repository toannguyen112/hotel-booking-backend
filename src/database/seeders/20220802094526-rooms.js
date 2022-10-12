"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { faker } = require("@faker-js/faker");
    var data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        t_prod_id: `PRO${Math.random()}`,
        t_prod_prodCateId: null,
        t_prod_loyID: null,
        t_prod_schemaID: "SCHjww9ud21p1",
        t_prod_name: faker.name.firstName(),
      });
    }
    await queryInterface.bulkInsert("rooms", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null);
  },
};
