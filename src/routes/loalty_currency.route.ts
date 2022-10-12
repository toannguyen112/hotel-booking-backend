import { Router } from "express";
import LoyaltyCurrencyController from "../controllers/Loyalty/loyalty_currency.controller";

const route: Router = Router();

route.get("/loyalty-currency", new LoyaltyCurrencyController().index);
route.post("/loyalty-currency", new LoyaltyCurrencyController().create);
route.put("/loyalty-currency/update/:id", new LoyaltyCurrencyController().update);
route.delete("/loyalty-currency/delete/:id", new LoyaltyCurrencyController().delete);

export default route;
