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
    const images = req["files"];
    let arrImage: File[] = [];

    for await (const image of images) {
      const file = await File.storeMedia(image)
     arrImage = [...arrImage,file]  ;
    }

    return res.status(200).json({
      message: "Upload File Success",
      data: arrImage,
    });
  }

  async delete(req: Request, res: Response) {
    const data = await File.destroy({ where: { id: req.params.id } })
    if (data) return res.status(200).json({
      message: "Remove File Success",
    })
  }

}
