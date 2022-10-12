import { Request, Response } from "express";
import Tenant from "../models/tenant.model";
export default class HomeController {
  async index(req: Request, res: Response) {
    try {
      const data = await Tenant.findAll({});
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}
