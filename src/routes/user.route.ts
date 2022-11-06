import { Router } from "express";
import UserController from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
const route: Router = Router();

route.get("/user/get-users", new UserController().getUsers);
route.get("/user/profile", auth, new UserController().profile);
route.post("/user/login", new UserController().login);
route.post("/user/register", new UserController().register);
route.post("/user/logout", auth, new UserController().logout);
route.post("/user/order", auth, new UserController().order);
route.get("/user/:id/get-user-order", new UserController().getUserOrder);

export default route;
