import { Request, Response } from "express";
import Room from "../models/room.model";
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

    async login(req: Request, res: Response) {
        return new Tenant().login(req, res);
    }

    async logout(req: Request, res: Response) {
        return new Tenant().logout(req, res);
    }

    async profile(req: Request, res: Response) {
        const { id } = req.tenant;
        try {
            const tenant = await Tenant.findOne({ where: { id } })
            return res.status(200).json({ message: "OK", data: tenant });

        } catch (error) {
            res.status(500);
        }
    }

    async getRooms(req: Request, res: Response) {
        const { id } = req.tenant;
        try {
            const rooms = await Room.findAll({
                include: {
                    model: Tenant,
                    as: 'tenant',
                    where: { id }
                }
            },)
            return res.status(200).json({ message: "OK", data: rooms });
        } catch (error) {
            res.status(500);
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.tenant;
        await Tenant.update({ ...req.body }, { where: { id } })
        const tenant = await Tenant.findOne({ where: { id } })
        return res.status(200).json(tenant);
    }

}
