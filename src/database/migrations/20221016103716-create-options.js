"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("options", {
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

  down: (queryInterface) => queryInterface.dropTable("options"),
};
