"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rooms", [
      {
        id: 1,
        category_id: 1,
        tenant_id: 1,
        name: "PHÒNG TRỌ HOÀNG THÔNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        phone: "0775600351",
        price: 50000,
        image: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      },
      {
        id: 2,
        category_id: 1,
        tenant_id: 2,
        name: "PHÒNG TRỌ HOÀNG THÔNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        phone: "0775600351",
        price: 50000,
        image: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      },
      {
        id: 3,
        category_id: 1,
        tenant_id: 1,
        name: "PHÒNG TRỌ HOÀNG THÔNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        phone: "0775600351",
        price: 50000,
        image: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      },
      {
        id: 4,
        category_id: 2,
        tenant_id: 1,
        name: "PHÒNG TRỌ HOÀNG THÔNG",
        status: "ACTIVE",
        info: "Phòng trọ cho thuê chính chủ, còn 2 phòng ở tầng 1 và 3 (tầng trên có 2 cửa sổ), đầy đủ tiện nghi tại:",
        address: " đường Kênh An Hạ, ấp Bình Tiền 2, xã Đức Hòa Hạ, Huyện Đức Hòa, TP. Long An *** CHO THUÊ PHÒNG TRỌ HOÀNG THÔNG GIÁ RẺ NHẤT ĐỨC HÒA HẠ",
        star: 5,
        phone: "0775600351",
        price: 50000,
        image: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
