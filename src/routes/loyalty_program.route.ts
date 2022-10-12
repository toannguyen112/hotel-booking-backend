import { auth } from './../middlewares/auth.middleware';
import { Router } from "express";
import LoyaltyProgramController from "../controllers/Loyalty/loyalty_program.controller";
const route: Router = Router();

route.get("/loyalty-programs", auth, new LoyaltyProgramController().index);
route.get("/loyalty-programs/show/:id", auth, new LoyaltyProgramController().show);
route.post("/loyalty-programs/create", auth, new LoyaltyProgramController().create);
route.put("/loyalty-programs/update/:id", auth, new LoyaltyProgramController().update);
route.delete("/loyalty-programs/delete/:id", auth, new LoyaltyProgramController().delete);

export default route;
