import { Request, Response } from "express";
import Tenant from "../models/tenant.model";
import AuthController from "./auth.controller";
export default class TenantController extends AuthController {
    async index(req: Request, res: Response) {
        try {
            const data = await Tenant.findAll({});

            return res.status(200).json({ message: "OK", data });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
