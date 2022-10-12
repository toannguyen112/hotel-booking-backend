
import { Request, Response } from "express";
import TenantUser from "../../models/tenant_user.model";

export default class TenantUserController {
    async index(req: Request, res: Response) {
        new TenantUser().getListData(req, res);
    }

    async login(req: Request, res: Response) {
        new TenantUser().handleLogin(req, res);
    }

    async register(req: Request, res: Response) {
        new TenantUser().handleRegister(req, res);
    }

    async logout(req: Request, res: Response) {
        new TenantUser().handleLogout(req, res);
    }

    async profile(req: Request, res: Response) {
        try {
            const tenant = req.tenant_user;
            return res.status(200).json(tenant);

        } catch (error) {
            res.status(500).send(error);
        }
    }
}
