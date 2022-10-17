"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rooms", [
      {
        id: 1,
        category_id: 1,
        name: "PHÒNG TRỌ HOÀNG THÔNG - CHO THUÊ PHÒNG GIÁ RẺ NHẤT LONG AN CHỈ 900.000/THÁNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        price: 50000,
        image: "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/26/49d0109d7310b74eee01_1664172375.jpg",
      },
      {
        id: 2,
        category_id: 1,
        name: "PHÒNG TRỌ HOÀNG THÔNG - CHO THUÊ PHÒNG GIÁ RẺ NHẤT LONG AN CHỈ 900.000/THÁNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        price: 50000,
        image: "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/26/49d0109d7310b74eee01_1664172375.jpg",
      },
      {
        id: 3,
        category_id: 1,
        name: "PHÒNG TRỌ HOÀNG THÔNG - CHO THUÊ PHÒNG GIÁ RẺ NHẤT LONG AN CHỈ 900.000/THÁNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        price: 50000,
        image: "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/26/49d0109d7310b74eee01_1664172375.jpg",
      },
      {
        id: 4,
        category_id: 2,
        name: "PHÒNG TRỌ HOÀNG THÔNG - CHO THUÊ PHÒNG GIÁ RẺ NHẤT LONG AN CHỈ 900.000/THÁNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        price: 50000,
        image: "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/26/49d0109d7310b74eee01_1664172375.jpg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
