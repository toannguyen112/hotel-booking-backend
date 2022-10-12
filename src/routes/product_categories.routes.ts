import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import ProductCategoryController from "../controllers/Product/product_category.controller";

const route = Router();

route.get("/product-categories", auth, new ProductCategoryController().index);
route.post("/product-categories/create", auth, new ProductCategoryController().create);
route.put("/product-categories/update/:id", auth, new ProductCategoryController().update);
route.delete("/product-categories/delete/:id", auth, new ProductCategoryController().delete);

export default route;
