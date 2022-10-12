import { Router } from "express";
import TenantController from "../controllers/Tenant/tenant.controller";
const route: Router = Router();

route.get("/tenants", new TenantController().index);
route.post("/tenants/create", new TenantController().create);

export default route;
