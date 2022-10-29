import { Router } from "express";
import UserController from "../controllers/user.controller";
const route: Router = Router();

route.get("/user/index", new UserController().index);
route.get("/user/login", new UserController().login);
route.post("/user/create", new UserController().register);
route.post("/user/create", new UserController().logout);

export default route;
