"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("rooms", {
      id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      tenant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tenants",
          key: "id",
        },
      },

      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },

      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "INACTIVE",
      },

      exp_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      phone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      info: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      star: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },

      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: true,
      },

      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      number_room: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("rooms"),
};
