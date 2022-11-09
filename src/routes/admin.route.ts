import { Router } from "express";
import AdminController from "../controllers/admin.controller";
import { adminAuth } from "../middlewares/adminAuth.middleware";

const route: Router = Router();

route.get("/admin/index", adminAuth, new AdminController().index);
route.get("/admin/get-users", new AdminController().getUsers);
route.post("/admin/login", new AdminController().login);
route.post("/admin/logout", adminAuth, new AdminController().logout);
route.get("/admin/profile", adminAuth, new AdminController().profile);
route.put("/admin/update-profile", adminAuth, new AdminController().updateProfile);

export default route;
