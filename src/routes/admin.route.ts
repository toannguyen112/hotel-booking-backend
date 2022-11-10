import { Router } from "express";
import AdminController from "../controllers/admin.controller";
import { adminAuth } from "../middlewares/adminAuth.middleware";

const route: Router = Router();

route.get("/admin/index", adminAuth, new AdminController().index);
route.get("/admin/get-users", new AdminController().getUsers);
route.get("/admin/show/:id", new AdminController().show);
route.post("/admin/create", new AdminController().create);
route.put("/admin/update/:id", new AdminController().update);
route.post("/admin/login", new AdminController().login);
route.post("/admin/logout", adminAuth, new AdminController().logout);
route.get("/admin/profile", adminAuth, new AdminController().profile);
route.put("/admin/update-profile", adminAuth, new AdminController().updateProfile);

export default route;
