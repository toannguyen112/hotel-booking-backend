import { Router } from "express";
import TenantController from "../controllers/tenant.controller";
import { tenantAuth } from "../middlewares/tenantAuth.middleware";
import Helper from "../utils/Helpers";
const route: Router = Router();

route.get("/tenant/index", new TenantController().index);
route.post("/tenant/logout", tenantAuth, new TenantController().logout);
route.post("/tenant/login", new TenantController().login);
route.get("/tenant/profile", tenantAuth, new TenantController().profile);
route.get("/tenant/get-rooms", tenantAuth,
    function (req, res, next) {
        Helper.checkPermission(req.admin.role_id, 'get_all_rooms').then((rolePerm) => {
            next();
        }).catch((error) => {
            res.status(403).send(error);
        });
    }, new TenantController().getRooms);

export default route;
