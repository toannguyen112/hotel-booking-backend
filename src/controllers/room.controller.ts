import { Request, Response } from "express";
import paginate from "jw-paginate";
import { Op } from "sequelize";
import Category from "../models/categories.model";
import Room from "../models/room.model";
import RoomFile from "../models/roomFile.model";
import Tenant from "../models/tenant.model";
import { ApiFeatures } from "../test/apiFeatures";

export default class RoomController {
  async index(req: Request, res: Response) {
    const query = { ...req.query };

    const queryObject = {
      category_id: req.query.category_id,
      city_id: req.query.city_id,
      price: req.query.price,
      size: req.query.size,
    };

    const conditions = {
      status: "ACTIVE"
    };

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
        case "category_id":
          const category_id = typeof arrQueryObject[index].value === "string" ? [arrQueryObject[index].value] : arrQueryObject[index].value;
          if (Array.isArray(category_id)) {
            conditions["category_id"] = {
              [Op.in]: category_id,
            };
          }
          break;

        case "city_id":
          const city_id = typeof arrQueryObject[index].value === "string" ? [arrQueryObject[index].value] : arrQueryObject[index].value;
          if (Array.isArray(city_id)) {
            conditions["city_id"] = {
              [Op.in]: city_id,
            };
          }
          break;

        case "price":
          const price = typeof arrQueryObject[index].value === "string" ? [arrQueryObject[index].value] : arrQueryObject[index].value;
          if (Array.isArray(price)) {
            conditions["price"] = {
              [Op.in]: price,
            };
          }
          break;

        case "size":
          const size = typeof arrQueryObject[index].value === "string" ? [arrQueryObject[index].value] : arrQueryObject[index].value;
          if (Array.isArray(size)) {
            conditions["size"] = {
              [Op.in]: size,
            };
          }
          break;
        default:
          break;
      }
    }

    const objQuery = new ApiFeatures(query)
      .filter(conditions)
      .limitFields()
      .paginate()
      .getObjQuery();

    const { count, rows }: any = await Room.findAndCountAll(objQuery);

    const items = rows.map((item) => {
      return item;
    });

    const result = {
      page: Number(query?.page) * 1,
      pageSize: Number(query?.page_size) * 1,
      totalItems: count || 0,
      items: items,
    };

    res.status(200).json(result)
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

  async getRooms(req, res) {

    try {
      let rooms = await Room.findAll({});

      // example array of 150 items to be paged
      const items = [...rooms];

      // get page from query params or default to first page
      const page = parseInt(req.query.page) || 1;

      // get pager object for specified page
      const pageSize = 2;
      const pager = paginate(items.length, page, pageSize);

      // get page of items from items array
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // return pager object and current page of items
      return res.json({ pager, pageOfItems });

    } catch (error) {
      res.status(500).send(error);
    }
  }
}
