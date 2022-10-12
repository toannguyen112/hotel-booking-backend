"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { faker } = require("@faker-js/faker");
    await queryInterface.bulkInsert("tenant_users", [
      {
        t_usr_id: `TUR15O5xqrRvlqIjTr61hfN`,
        t_schema_id: "SCHjww9ud21p1",
        t_usrRole_id: null,
        t_usr_name: "toannguyen",
        t_usr_usrName: "toannguyen112",
        t_usr_Password: "$2b$08$fa.sgYHAouTw1wlCxBjl2..o/A4ZDPQVViAT0JwJBHCf0vI2zVeiy",
        t_usr_Email: faker.internet.email(),
        t_usr_Email: faker.phone.number(),
        t_usr_recordOwner: faker.name.firstName(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tenant_users", null, {});
  },
};
