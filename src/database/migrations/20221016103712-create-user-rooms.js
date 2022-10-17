"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("user_rooms", {
      user_id: {
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },

      room_id: {
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "rooms",
          key: "id",
        },
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("user_rooms"),
};
