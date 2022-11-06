import { Router } from "express";
import TenantController from "../controllers/tenant.controller";
import { tenantAuth } from "../middlewares/tenantAuth.middleware";
const route: Router = Router();

route.get("/tenants/index", new TenantController().index);
route.post("/tenant/logout", tenantAuth, new TenantController().logout);
route.post("/tenant/login", new TenantController().login);
route.get("/tenant/profile", tenantAuth, new TenantController().profile);

export default route;
