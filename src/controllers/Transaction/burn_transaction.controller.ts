import express, { Request, Response } from "express";
import BurnTransaction from "../../models/mongodb_model/burn_transaction.model";
export default class HomeController {
    async index(req: Request, res: Response) {
        try {
            const data = await BurnTransaction.find({});
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
}
