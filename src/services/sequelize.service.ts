import dotenv from "dotenv";

import { Sequelize } from "sequelize-typescript";
import path from "path";
dotenv.config();

export default class SequelizeService {
  static async init() {
    try {
      let sequelize = new Sequelize({
        database: "hotel-booking",
        dialect: "mysql",
        username: "root",
        password: "root",
        host: "localhost",
        define: {
          timestamps: false,
        },
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
