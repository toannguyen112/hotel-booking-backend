import { Router } from "express";
import AdminController from "../controllers/admin.controller";
import { adminAuth } from "../middlewares/adminAuth.middleware";

const route: Router = Router();

route.get("/admin/login", adminAuth, new AdminController().login);
route.post("/admin/logout", adminAuth, new AdminController().logout);

export default route;
