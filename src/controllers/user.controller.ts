import { Request, Response } from "express";
import User from "../models/user.model";
import AuthController from "./auth.controller";

export default class UserController extends AuthController {

  async getUsers(req: Request, res: Response) {
    const data = await User.findAll({});
    return res.json(data).status(200);
  }

}
