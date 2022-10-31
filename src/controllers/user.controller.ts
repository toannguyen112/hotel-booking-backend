import { Request, Response } from "express";
import User from "../models/user.model";
export default class UserController {

  async login(req: Request, res: Response) {
    return new User().handleLogin(req, res);
  }

  async getUsers(req: Request, res: Response) {
    const data = await User.findAll({});
    return res.json(data).status(200);
  }

  async register(req: Request, res: Response) {
    return new User().handleRegister(req, res);
  }

  async logout(req: Request, res: Response) {
    return new User().handleLogout(req, res);
  }
}
