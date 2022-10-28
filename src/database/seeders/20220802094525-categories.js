"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        name: "Phòng trọ, nhà trọ",
        image: "https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-cr7-hotels/cr7-lisboa-building.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"
      },
      {
        id: 2,
        name: "Nhà thuê nguyên căn",
        image: "https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-cr7-hotels/cr7-lisboa-building.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"
      },
      {
        id: 3,
        name: "Cho thuê căn hộ",
        image: "https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-cr7-hotels/cr7-lisboa-building.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"
      },
      {
        id: 4,
        name: "Cho thuê căn hộ mini",
        image: "https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-cr7-hotels/cr7-lisboa-building.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"
      },
      {
        id: 5,
        name: "Tìm người ở ghép",
        image: "https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-cr7-hotels/cr7-lisboa-building.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"
      },
      {
        id: 6,
        name: "Cho thuê mặt bằng",
        image: "https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-cr7-hotels/cr7-lisboa-building.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
