import jwt, { Secret } from "jsonwebtoken";
import { env } from "process";
import { Request, Response, NextFunction } from "express";
import TenantUser from "../models/tenant_user.model";

export const SERVER_JWT_SECRET: Secret = env.SERVER_JWT_SECRET;

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).send("Not found token");
        }

        const decoded: any = jwt.verify(token, SERVER_JWT_SECRET);
        const tenant: TenantUser = await TenantUser.findOne({ where: { t_usr_id: decoded.tenant_user.t_usr_id } });
        const hasToken: boolean = tenant?.tokens.find((t: { token: string }) => t.token === token);

        if (!hasToken || !tenant) {
            throw new Error();
        }

        req.tenant_user = tenant;
        req.token = token;
        global.user = tenant;

        next();
    } catch (err) {
        console.log(err);
        return res.status(401).send("Please authenticate");
    }
};
