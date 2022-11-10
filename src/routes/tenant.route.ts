import { Router } from "express";
import TenantController from "../controllers/tenant.controller";
import { tenantAuth } from "../middlewares/tenantAuth.middleware";
import Helper from "../utils/Helpers";
const route: Router = Router();

route.get("/tenant/index", new TenantController().index);
route.put("/tenant/update", tenantAuth, new TenantController().update);
route.post("/tenant/logout", tenantAuth, new TenantController().logout);
route.post("/tenant/login", new TenantController().login);
route.get("/tenant/profile", tenantAuth, new TenantController().profile);
route.get("/tenant/get-rooms", tenantAuth, new TenantController().getRooms);

export default route;
