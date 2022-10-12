import { Request, Response } from "express";
import Product from "../../models/product.model";
import ProductCategory from "../../models/product_category.model";
export default class ProductCategoryController {
  async index(req: Request, res: Response) {
    try {
      const { t_schema_id } = global.user;
      const data = await ProductCategory.findAll({
        where: { t_schema_id },
        include: [Product],
      });

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { t_schema_id } = global.user;
      await ProductCategory.create({
        t_schema_id: t_schema_id,
        ...req.body,
      });

      const categories = await ProductCategory.findAll({});
      return res.status(200).json({ message: "OK", data: categories });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { t_schema_id } = global.user;
      const { id, body } = req.params;

      await ProductCategory.update(
        { body }, {
        where: {
          t_prodCate_id: id,
          t_schema_id: t_schema_id,
        },
      }
      );

      const categories = await ProductCategory.findAll({});
      return res.status(200).json({ message: "OK", data: categories });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { t_schema_id } = global.user;
      const { id } = req.params;
      await Product.destroy({
        where: { t_prod_id: id, t_prod_schemaID: t_schema_id },
      });

      const products = await Product.findAll({});
      return res.status(200).json({ message: "OK", data: products });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
