import dotenv from "dotenv";

import * as tedious from "tedious";
import { Sequelize } from "sequelize-typescript";
import path from "path";
dotenv.config();

export default class SequelizeService {
  static async init() {
    try {
      let sequelize = new Sequelize({
        dialect: "mssql",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        define: {
          timestamps: true,
        },
        dialectModule: tedious,
      });

      sequelize
        .authenticate()
        .then(() => {
          console.log("Connection has been established successfully.");
        })
        .catch((error) => {
          console.error("Unable to connect to the database: ", error);
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
