import Admin from "../models/admin.model";
import { Request, Response } from "express";
import User from "../models/user.model";
export default class AdminController {

  async index(req: Request, res: Response) {
    const data = await Admin.findAll({});
    return res.json(data).status(200);
  }

  async getUsers(req: Request, res: Response) {
    const data = await User.findAll({});
    return res.json(data).status(200);
  }

  async login(req: Request, res: Response) {
    return new Admin().login(req, res);
  }

  async logout(req: Request, res: Response) {
    return new Admin().logout(req, res);
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const { id } = req.admin;
      await Admin.update(req.body, { where: { id } });
      const foundAdmin = await Admin.findOne({ where: { id } });
      return res.status(200).json({ message: "OK", data: foundAdmin });
    } catch (error) {
      res.status(500);
    }
  }

  async profile(req: Request, res: Response) {
    const { id } = req.admin;
    try {
      const admin = await Admin.findOne({ where: { id } })
      return res.status(200).json({ message: "OK", data: admin });

    } catch (error) {
      res.status(500);
    }
  }
}
