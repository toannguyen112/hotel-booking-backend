import { Request, Response } from "express";
import Voucher from "../../models/voucher.model";
export default class VoucherController {
    async index(req: Request, res: Response) {
        try {
            const data = await Voucher.findAll({});

            return res.status(200).json({
                message: "OK",
                data,
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await Voucher.create(req.body);
            return res.status(200).json({
                message: "Create success",
                data,
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const data = await Voucher.update(req.body, { where: { t_vouchr_id: id } });
            return res.status(200).json({
                message: "Update success",
                data,
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            await Voucher.destroy({ where: { t_vouchr_id: id } });
            return res.status(200).json({
                message: "Remove success",
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
