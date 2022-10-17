"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        name: "Phòng trọ, nhà trọ",
      },
      {
        id: 2,
        name: "Nhà thuê nguyên căn",
      },
      {
        id: 3,
        name: "Cho thuê căn hộ",
      },
      {
        id: 4,
        name: "Cho thuê căn hộ mini",
      },
      {
        id: 5,
        name: "Tìm người ở ghép",
      },
      {
        id: 6,
        name: "Cho thuê mặt bằng",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
