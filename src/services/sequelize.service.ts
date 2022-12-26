import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import path from "path";
import Helper from "../utils/Helper";
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DATABASE_URL } = process.env;

const optionsProduction = Helper.parseDatabaseUrl(DATABASE_URL)

const optionsDevelopment = {
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,

}

// Create conditional Sequelize database options here
const sequelizeOptions = process.env.NODE_ENV === 'production'
  ? optionsProduction
  : optionsDevelopment

export default class SequelizeService {
  static async init() {

    try {
      let sequelize = new Sequelize({
        dialect: "mysql",
        port: 3306,
        logging: false,
        ...sequelizeOptions,
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
