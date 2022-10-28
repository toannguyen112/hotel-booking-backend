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

  async register(req: Request, res: Response) {
    try {
      const data = await Tenant.create(req.body);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500);
    }
  }

  async logout(req: Request, res: Response) {
    try {
      const data = await Tenant.create(req.body);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500);
    }
  }

}
