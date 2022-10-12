import { Router } from "express";
import VoucherController from "../controllers/Voucher/voucher.controller";
const route: Router = Router();

route.get("/vouchers", new VoucherController().index);
route.post("/vouchers/create", new VoucherController().create);
route.delete("/vouchers/delete/:id", new VoucherController().delete);
route.put("/vouchers/update/:id", new VoucherController().update);

export default route;
