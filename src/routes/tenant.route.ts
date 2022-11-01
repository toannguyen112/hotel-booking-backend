import { Router } from "express";
import TenantController from "../controllers/tenant.controller";
const route: Router = Router();

route.get("/tenants/index", new TenantController().index);
route.post("/tenants/register", new TenantController().register);
route.post("/tenants/logout", new TenantController().logout);

export default route;
