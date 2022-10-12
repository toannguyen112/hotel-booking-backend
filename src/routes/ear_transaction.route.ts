import { Router } from "express";
import EarTransactionController from "../controllers/Transaction/ear_transaction.controller";

const route: Router = Router();
route.get("/earn-transactions", EarTransactionController.index);

export default route;
