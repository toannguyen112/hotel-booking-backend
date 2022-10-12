import dotenv from "dotenv";
import expressService from "./services/express.service";
import sequelizeService from "./services/sequelize.service";
// import mongodbService from "./services/mongodb.service";
dotenv.config();

// const services = [expressService, sequelizeService, mongodbService];
const services = [expressService, sequelizeService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log(`Server initialized localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();



