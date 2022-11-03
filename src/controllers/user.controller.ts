import { Request, Response } from "express";
import Room from "../models/room.model";
import User from "../models/user.model";
import UserRoom from "../models/userRoom.model";

export default class UserController {

  async getUsers(req: Request, res: Response) {
    const data = await User.findAll({});
    return res.json(data).status(200);
  }

  async login(req: Request, res: Response) {
    return new User().login(req, res);
  }

  async register(req: Request, res: Response) {
    return new User().register(req, res);
  }

  async logout(req: Request, res: Response) {
    return new User().logout(req, res);
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await User.findOne({ where: { id } });

      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      const data = await User.findAll({});
      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async order(req: Request, res: Response) {

    const { id } = req.user;

    try {
      const data = await UserRoom.create({
        user_id: id,
        room_id: req.body.room_id,
      });
      return res.status(200).json({ message: "Order Success", data: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserOrder(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await User.findOne({
        where: { id }, include: [
          {
            model: Room,
            as: 'rooms'
          }
        ]
      });

      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

}
