import { Router } from "express";
import ProductCategoryController from "../controllers/Room/categories.controller";

const route = Router();

route.get("/product-categories", new ProductCategoryController().index);
route.post("/product-categories/create", new ProductCategoryController().create);
route.put("/product-categories/update/:id", new ProductCategoryController().update);
route.delete("/product-categories/delete/:id", new ProductCategoryController().delete);

export default route;
