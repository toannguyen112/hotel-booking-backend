import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import ProductController from "../controllers/Product/product.controller";

const route = Router();

route.get("/products", auth, new ProductController().index);
route.post("/products/create", auth, new ProductController().create);
route.put("/products/update/:id", auth, new ProductController().update);
route.delete("/products/delete/:id", auth, new ProductController().delete);

export default route;
