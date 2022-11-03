import Admin from "../models/admin.model";
import { Request, Response } from "express";
export default class AdminController {
  async login(req: Request, res: Response) {
    return new Admin().login(req, res);
  }

  async logout(req: Request, res: Response) {
    return new Admin().logout(req, res);
  }
}
