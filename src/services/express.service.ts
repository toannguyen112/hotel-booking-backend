import express , { Request, Response }from "express";
import { env } from "process";
import cors from "cors";
import compression from "compression";
import fs from "fs";
import bodyParser from "body-parser";

let app = express();
let routes: any[] = [];
let routeFiles: string[] = []

routeFiles = fs.readdirSync(__dirname + "/../routes/").filter((file) => file.endsWith(".js") || file.endsWith(".ts"));
export default class ExpressService {
  static async init() {
    try {

      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);

        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }

      app.use(cors());
      app.use(compression());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(express.json());
      app.use(routes);

      app.all("*", (req: Request, res: Response) => {
        res.status(404).send(`Can find ${req.originalUrl} on this server`);
      });

      let server = app.listen(env.PORT || 8000);
      process.on('uncaughtException', (err) => {
        console.log(err.name, err.message);
        server.close(() => {
          process.exit(1);
        });
      });
      
      console.log("[EXPRESS] Express initialized");
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  }

}
