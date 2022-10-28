import { Request, Response } from "express";
import User from "../models/user.model";

export default class UserController {

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await User.findOne(username);
    return res.status(200).json({
      message: "User login success",
      data: user,
    });
  }

  async register(req: Request, res: Response) {
    try {
      const data = await User.create(req.body);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "",
        data: ""
      });
    }
  }

  async logout(req: Request, res: Response) {

  }


}
