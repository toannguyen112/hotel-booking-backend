import dotenv from "dotenv";
import express from "express";

import { Sequelize } from "sequelize-typescript";
import path from "path";
dotenv.config();

const ssl = {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};
export default class SequelizeService {

  static async init() {
    try {

      let sequelize = new Sequelize({
        dialect: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        define: {
          timestamps: true,
        },
        dialectOptions: express().get('env') === 'production' ? ssl : {},
      });

      // init sequelize model
      sequelize.addModels([path.resolve(__dirname, `../models/`)]);

      console.log("Database service initialized");
    } catch (error) {
      console.log("Error during database service initialization");
      throw error;
    }
  }
}
