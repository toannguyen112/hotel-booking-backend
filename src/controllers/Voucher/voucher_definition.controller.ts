import { Request, Response } from "express";
import VoucherDefinition from "../../models/voucher_definition.model";
export default class VoucherDefinitionController {
    async index(req: Request, res: Response) {
        try {
            const data = await VoucherDefinition.findAll({});

            return res.status(200).json({
                message: "OK",
                data,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    async show(req: Request, res: Response) {
        try {
            const data: VoucherDefinition = await VoucherDefinition.findOne({
                where: { t_vouchrDef_id: req.params.id },
            });

            return res.status(200).json({
                success: true,
                message: "OK",
                data: data,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            await VoucherDefinition.create(req.body);

            const data = await VoucherDefinition.findAll({});
            return res.status(200).json({
                message: "Create success",
                data,
            });
        } catch (error) {
            console.log(error);

            return res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const data = await VoucherDefinition.update(req.body, { where: { t_vouchrDef_id: id } });
            return res.status(200).json({
                message: "Update success",
                data,
            });
        } catch (error) {
            console.log(error);

            return res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            await VoucherDefinition.destroy({ where: { t_vouchrDef_id: id } });
            return res.status(200).json({
                message: "Remove success",
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
