"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("room_files", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      file_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "files",
          key: "id",
        },
      },

      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "rooms",
          key: "id",
        },
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("room_files"),
};
