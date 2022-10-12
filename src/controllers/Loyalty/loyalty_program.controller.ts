import { Request, Response } from "express";
import BenefitType from "../../models/benefit_type.model";
import LoyaltyProgram from "../../models/loyalty_program.model";
import LoyaltyPromotion from "../../models/loyalty_promotion.model";
export default class LoyaltyProgramController {
    async index(req: Request, res: Response) {
        try {
            const { t_schema_id } = global.user;

            const data: LoyaltyProgram[] = await LoyaltyProgram.findAll({ where: { t_schema_id } });
            return res.status(200).json({
                success: true,
                message: "OK",
                data: data,
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { t_schema_id } = global.user;
            const data: LoyaltyProgram = await LoyaltyProgram.findOne({
                where: { t_schema_id },
                include: [BenefitType, LoyaltyPromotion]
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
            await LoyaltyProgram.create(req.body);
            const data = await LoyaltyProgram.findAll({});

            return res.status(200).json({ message: "OK", data: data });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { t_schema_id } = global.user;
            const { id, body } = req.params;
            const data = await LoyaltyProgram.update(
                { body }, { where: { t_loyalProg_id: id, t_schema_id } });
            return res.status(200).json({ message: "OK", data });
        } catch (error) {

            console.log(error);
            res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { t_schema_id } = global.user;
            const { id } = req.params;
            await LoyaltyProgram.destroy({
                where: { t_loyalProg_id: id, t_schema_id },
            });

            const data = await LoyaltyProgram.findAll({});
            return res.status(200).json({ message: "OK", data: data });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}
