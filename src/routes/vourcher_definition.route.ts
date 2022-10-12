import { Router } from "express";
import VoucherDefinitionController from "../controllers/Voucher/voucher_definition.controller";
const route: Router = Router();

route.get("/voucher-definition", new VoucherDefinitionController().index);
route.get("/voucher-definition/:id", new VoucherDefinitionController().show);
route.post("/voucher-definition/create", new VoucherDefinitionController().create);
route.delete("/voucher-definition/delete/:id", new VoucherDefinitionController().delete);
route.put("/voucher-definition/update/:id", new VoucherDefinitionController().update);

export default route;
