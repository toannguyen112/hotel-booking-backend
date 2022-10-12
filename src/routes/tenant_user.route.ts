import { auth } from './../middlewares/auth.middleware';
import { Router } from "express";
import TenantUserController from "../controllers/Tenant/tenant_user.controller";
const route: Router = Router();

route.get("/tenant-users", new TenantUserController().index);

route.post("/tenant-user/login", new TenantUserController().login);
route.post("/tenant-user/logout", auth, new TenantUserController().logout);
route.post("/tenant-user/register", new TenantUserController().register);

route.get("/tenant-user-profile", auth, new TenantUserController().profile);

export default route;
