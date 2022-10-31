import { Router } from "express";
import AdminController from "../controllers/admin.controller";
const route: Router = Router();

route.get("/admin/login", new AdminController().login);
route.post("/admin/logout", new AdminController().logout);

export default route;
