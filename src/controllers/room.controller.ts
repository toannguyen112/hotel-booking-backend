import { Request, Response } from "express";
import Category from "../models/categories.model";
import File from "../models/file.model";
import Room from "../models/room.model";
import RoomFile from "../models/roomFile.model";
import Tenant from "../models/tenant.model";

export default class RoomController {
  async index(req: Request, res: Response) {
    try {
      const data = await Room.findAll({
        include: [File],
      });
      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const room = await Room.create(req.body);
      const images = req.body.images;
      for await (const image of images) {
        const roomFile = {
          room_id: room.id,
          file_id: image.id,
        };
        await RoomFile.create(roomFile);
      }

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
      const data = await Room.update({ body }, { where: { id } });

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
