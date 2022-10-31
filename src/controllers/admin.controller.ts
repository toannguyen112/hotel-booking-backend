import { Request, Response } from "express";
import Admin from "../models/admin.model";

export default class AdminController {
  async login(req: Request, res: Response) {
    const { name, password } = req.body;
    const admin = await Admin.findOne(name);
    console.log(Admin);

    return res.status(200).json({
      message: "Admin login success",
      data: Admin,
    });
  }

  async logout(req: Request, res: Response) { }
}
