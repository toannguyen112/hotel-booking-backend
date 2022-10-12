import { Router } from "express";
import BurnTransactionController from "../controllers/Transaction/burn_transaction.controller";

const route: Router = Router();
route.get("/burn-transactions", new BurnTransactionController().index);
route.post("/burn-transactions", new BurnTransactionController().index);
route.put("/burn-transactions", new BurnTransactionController().index);
route.delete("/burn-transactions", new BurnTransactionController().index);

export default route;
