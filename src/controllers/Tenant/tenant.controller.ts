import { Request, Response } from "express";
import Tenant from "../../models/tenant.model";
export default class TenantController {
    // constructor() {
    //     Helper.applyMixins(TenantController, [HasCrudAction]);
    // }

    async index(req: Request, res: Response) {
        try {
            const tenants = await Tenant.findAll({});
            
            return res.status(200).json({
                data: tenants || [{name: 1, description: "ok nek"}],
            });
        } catch (error) {
            res.status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await Tenant.create(req.body);

            return res.status(200).json(data);
        } catch (error) {
            res.status(500);
        }
    }
}

