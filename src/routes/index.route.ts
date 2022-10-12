import { Router, Request, Response } from "express";
import HelperController from "../controllers/helper.controller";
import HomeController from "../controllers/home.controller";

const route: Router = Router();

route.get("/", new HomeController().index);
route.post("/model-data", (req: Request, res: Response) => {
    return new HelperController().getModelData(req, res);
});

export default route;
