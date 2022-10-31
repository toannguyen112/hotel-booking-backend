import { Router } from "express";
import UserController from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
import User from "../models/user.model";
const route: Router = Router();

route.get("/user/get-users", new UserController().getUsers);
route.post("/user/login", auth, new UserController().login);
route.post("/user/register", new UserController().register);
route.post("/user/logout", auth, new UserController().logout);

export default route;
