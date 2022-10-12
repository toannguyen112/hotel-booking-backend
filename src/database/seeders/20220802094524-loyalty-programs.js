"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("loyalty_programs", [
      {
        t_loyalProg_id: `LOY302iwoD49MDm2c`,
        t_schema_id: "SCHjww9ud21p1",
        t_loyalProg_name: "WS Loyalty Program 2022",
        t_loyalProg_status: "New",
        t_loyalProg_transQuaPt: false,
        t_loyalProg_tierReCycle: "Monthly",
        t_loyalProg_tierStartDate: "2022-04-20",
        t_loyalProg_lastTierReDate: "2021-04-20",
        t_loyalProg_nextTierReDate: "2023-04-20 ",
        t_loyalProg_desc: null,
        t_loyalProg_recordOwner: "TURa432AiesKKKL3200F",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("loyalty_programs", null, {});
  },
};
