import { Request, Response } from "express";
import Category from "../models/categories.model";
import Room from "../models/room.model";
import Tenant from "../models/tenant.model";

export default class RoomController {
  async index(req: Request, res: Response) {
    try {
      const data = await Room.findAll({});

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response) {
    const images = req["files"];
    console.log(images);

    const reqData = JSON.parse(req.body["data"]);

    try {
      await Room.create({
        ...reqData,
      });

      const data = await Room.findAll({});
      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Room.findOne({
        where: { id },
        include: [Category, Tenant],
      });

      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id, body } = req.params;
      const data = await Room.update(
        { body },
        {
          where: { id },
        }
      );

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Room.destroy({
        where: { id },
      });

      const data = await Room.findAll({});
      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
