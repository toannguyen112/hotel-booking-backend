import { Request, Response } from "express";
import File from "../models/file.model";

export default class MediaController {
  async index(req: Request, res: Response) {
    try {
      const data = await File.findAll({});
      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async store(req: Request, res: Response) {
    console.log(req);
  }

  async delete(req: Request, res: Response) {
    console.log(req);
  }
}
