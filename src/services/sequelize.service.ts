import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import path from "path";
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

export default class SequelizeService {
  static async init() {

    try {
      let sequelize = new Sequelize({
        database: DB_NAME,
        dialect: "mysql",
        username: DB_USER,
        password: DB_PASS,
        host: DB_HOST,
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
