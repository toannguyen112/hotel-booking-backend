import { Request, Response } from "express";
import Benefit from "../models/benefit.model";
export default class BenefitController {
    async index(req: Request, res: Response) {
        try {
            const data = await Benefit.findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await Benefit.create(req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            await Benefit.update({}, { where: { t_benf_id: id } });
            return res.status(200).json("Update success");
        } catch (error) {
            return res.status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            await Benefit.destroy({ where: { t_benf_id: id } });
            return res.status(200).json("Remove success");
        } catch (error) {
            return res.status(500);
        }
    }
}
