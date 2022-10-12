import { Request, Response } from "express";
import LoyaltyPromotion from "../../models/loyalty_promotion.model";
export default class LoyaltyPromotionController {
    async index(req: Request, res: Response) {
        try {
            const data: LoyaltyPromotion[] = await LoyaltyPromotion.findAll({});
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data: LoyaltyPromotion = await LoyaltyPromotion.create(req.body);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            await LoyaltyPromotion.update(req.body, { where: { t_loyaPrm_id: id } });
            return res.status(200).json("Update success");
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            await LoyaltyPromotion.destroy({ where: { t_loyaPrm_id: id } });
            return res.status(200).json("Remove success");
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}
