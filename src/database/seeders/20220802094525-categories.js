"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const { faker } = require("@faker-js/faker");

    await queryInterface.bulkInsert(
      "product_categories",
      [
        {
          t_prodCate_id: `PRC${Math.random()}`,
          t_loyalProg_id: null,
          t_schema_id: "SCHjww9ud21p1",
          t_prodCate_name: faker.name.firstName(),
          t_prodCate_code: faker.name.firstName(),
          t_prodCate_brand: faker.name.firstName(),
          t_prodCate_desc: faker.name.firstName(),
          t_prodCate_recordOwner: faker.name.firstName(),
          t_prodCate_created_by: faker.name.firstName(),
          t_prodCate_lastModified_by: faker.name.firstName(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
