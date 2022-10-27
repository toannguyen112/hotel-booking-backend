import { Request, Response } from "express";
import { Op } from "sequelize";
import Category from "../models/categories.model";
import File from "../models/file.model";
import Room from "../models/room.model";
import RoomFile from "../models/roomFile.model";
import Tenant from "../models/tenant.model";
import { ApiFeatures } from "../test/apiFeatures";

export default class RoomController {
  async index(req: Request, res: Response) {
    const query = { ...req.query };
    const queryObject = {
      status: req.query.status,
    };

    const conditions = {};

    const excludedFields = ["page", "page_size", "sort_field", "sort_order", "fields"];
    excludedFields.forEach((field) => delete queryObject[field]);
    const arrQueryObject = Object.entries(queryObject).map((item) => {
      return {
        key: item[0],
        value: item[1],
      };
    });
    for (let index = 0; index < arrQueryObject.length; index++) {
      switch (arrQueryObject[index].key) {
        case "status":
          const voucherStatus = typeof arrQueryObject[index].value === "string" ? [arrQueryObject[index].value] : arrQueryObject[index].value;
          if (Array.isArray(voucherStatus)) {
            conditions["status"] = {
              [Op.in]: voucherStatus,
            };
          }
          break;
        default:
          break;
      }
    }

    const objQuery = new ApiFeatures(query)
      .filter(conditions)
      .sort(query.sort_field || "created_date", query.sort_order || "DESC")
      .limitFields()
      .paginate()
      .getObjQuery();

    // const { count, rows }: any = await Room.find(objQuery);
    // const items = [];
    // const result = {
    //   page: Number(query?.page) * 1,
    //   pageSize: Number(query?.page_size) * 1,
    //   totalItems: count || 0,
    //   items: [],
    // };

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
