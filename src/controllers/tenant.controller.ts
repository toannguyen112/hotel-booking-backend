import { Request, Response } from "express";
import Tenant from "../models/tenant.model";
export default class TenantController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const tenant = await Tenant.findOne(username);
      console.log(tenant);
      return res.status(200).json({
        message: "login success",
        data: "",
      });
    } catch (error) {
      res.status(500);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const data = await Tenant.findAll({});
      return res.status(200).json(data);
    } catch (error) {
      res.status(500);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await Tenant.create(req.body);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const { id, body } = req.params;
      const data = await Tenant.update(
        { body },
        {
          where: { t_prod_id: id, t_prod_schemaID: t_schema_id },
        }
      );

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const { id } = req.params;
      await Tenant.destroy({
        where: { t_prod_id: id, t_prod_schemaID: t_schema_id },
      });

      const data = await Tenant.findAll({});
      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
