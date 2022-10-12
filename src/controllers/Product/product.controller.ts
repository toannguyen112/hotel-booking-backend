import { Request, Response } from "express";
import Product from "../../models/product.model";
import ProductCategory from "../../models/product_category.model";
export default class ProductController {
  async index(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const data = await Product.findAll({
        where: { t_prod_schemaID: t_schema_id },
        include: ProductCategory,
      });

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      await Product.create({
        t_prod_schemaID: t_schema_id,
        ...req.body,
      });

      const products = await Product.findAll({});
      return res.status(200).json({ message: "OK", data: products });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const { id, body } = req.params;
      const data = await Product.update({ body }, {
        where: { t_prod_id: id, t_prod_schemaID: t_schema_id }
      });

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const { id } = req.params;
      await Product.destroy({
        where: { t_prod_id: id, t_prod_schemaID: t_schema_id }
      });

      const products = await Product.findAll({});
      return res.status(200).json({ message: "OK", data: products });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
