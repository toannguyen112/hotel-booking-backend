import { Request, Response } from "express";
import Tenant from "../models/tenant.model";
export default class HomeController {
  async index(req: Request, res: Response) {
    const data = await Tenant.findAll({});
      return res.status(200).json(data);
  }
}
