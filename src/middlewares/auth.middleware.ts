import jwt, { Secret } from "jsonwebtoken";
import { env } from "process";
import { Request, Response, NextFunction } from "express";

export const SERVER_JWT_SECRET: Secret = env.SERVER_JWT_SECRET;

export const auth = async (req: Request, res: Response, next: NextFunction) => {};
