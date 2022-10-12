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
        t_prod_size: faker.name.firstName(),
        t_prod_code: faker.name.firstName(),
        t_prod_sku: faker.name.firstName(),
        t_prod_gender: faker.name.firstName(),
        t_prod_color: faker.name.firstName(),
        t_prod_ageFrom: faker.datatype.number({
          min: 10,
          max: 50,
        }),
        t_prod_ageTo: faker.datatype.number({
          min: 10,
          max: 50,
        }),
        t_prod_startDate: faker.date.between("2015-01-01", "2015-01-05"),
        t_prod_endDate: faker.date.between("2015-01-01", "2015-01-05"),
        t_prod_desc: faker.name.firstName(),
        t_prod_recordOwner: faker.name.firstName(),
        t_prod_price: faker.commerce.price(),
        t_prod_imgURL: faker.image.image(),
        t_prod_created_by: faker.name.firstName(),
        t_prod_lastModified_by: faker.name.firstName(),
      });
    }
    await queryInterface.bulkInsert("products", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null);
  },
};
