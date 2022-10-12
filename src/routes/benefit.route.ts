import { Router } from "express";
import BenefitController from "../controllers/benefit.controller";
const route: Router = Router();

route.get("/benefit", new BenefitController().index);
route.post("/benefit", new BenefitController().create);
route.put("/benefit/update/:id", new BenefitController().update);
route.delete("/benefit/delete/:id", new BenefitController().delete);

export default route;
