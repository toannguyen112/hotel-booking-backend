import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, PrimaryKey, BeforeCreate, BeforeSave, DataType } from "sequelize-typescript";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const jwt = require("jsonwebtoken");

import Helper from "../utils/helpers";
import Tenant from "./tenant.model";
import bcrypt from "bcrypt";
@Table({
    tableName: "tenant_users",
    timestamps: true,
})
class TenantUser extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_usr_id!: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id!: string;

    @Column
    t_usrRole_id!: string;

    @Column
    t_usr_name!: string;

    @Column({
        unique: true,
    })
    t_usr_usrName!: string;

    @Column
    t_usr_Password!: string;

    @Column
    t_usr_Email!: string;

    @Column
    t_usr_Phone!: string;

    @Column
    t_usr_recordOwner!: string;

    @Column
    t_usr_created_by!: string;

    @Column
    t_usr_lastModified_by!: string;

    @Column({
        type: DataType.JSON,
    })
    tokens!: any;

    @CreatedAt
    t_usr_created_date!: Date;

    @UpdatedAt
    t_usr_lastModified_date!: Date;

    @BelongsTo(() => Tenant)
    tenant!: Tenant;

    @BeforeCreate
    static randomId(instance: TenantUser, options: any) {
        instance.t_usr_id = `TUR${Helper.randomString(20)}`;
    }

    async hashPassword(password: string) {
        const hashedPassword = await bcrypt.hash(password, 8);
        return hashedPassword;
    }

    async getListData(req: Request, res: Response) {
        try {
            const tenant_users = await TenantUser.findAll({});
            return res.status(200).json(tenant_users);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async handleLogin(req: Request, res: Response) {
        try {
            const foundUser = await TenantUser.findOne({ where: { t_usr_usrName: req.body.username } });
            if (!foundUser) {
                return res.status(500).send("Name of user is not correct");
            }

            const isMatch: boolean = bcrypt.compareSync(req.body.password, foundUser.t_usr_Password);

            if (isMatch) {
                const token: string = jwt.sign(
                    {
                        tenant_user: {
                            t_usr_id: foundUser.t_usr_id,
                            t_schema_id: foundUser.t_schema_id,
                            t_usr_name: foundUser.t_usr_name,
                        },
                    },
                    process.env.SERVER_JWT_SECRET,
                    { expiresIn: process.env.SERVER_JWT_TIMEOUT }
                );

                foundUser.tokens = foundUser.tokens ? foundUser.tokens.concat({ token }) : [{ token }];
                foundUser.save();

                return res.status(200).json({
                    user: foundUser,
                    token: token,
                });
            } else {
                return res.status(500).send("Password is not correct");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async handleRegister(req: Request, res: Response) {
        try {
            const { t_usr_usrName, t_usr_Password, t_usr_name, t_usr_Email, t_usr_Phone } = req.body;
            const t_password = await this.hashPassword(t_usr_Password);
            const tenantAdmin = await Tenant.findOne();
            const data = await TenantUser.create({
                t_schema_id: tenantAdmin.t_schema_id,
                t_usr_name: t_usr_name,
                t_usr_usrName: t_usr_usrName,
                t_usr_Password: t_password,
                t_usr_Email: t_usr_Email,
                t_usr_Phone: t_usr_Phone,
            });

            return res.status(200).json({
                message: "OK",
                data,
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async handleLogout(req: Request, res: Response) {
        try {
            req.tenant_user.tokens = req.tenant_user.tokens.filter((item: any) => {
                return item.token !== req.token;
            });

            await req.tenant_user.save();

            res.status(200).send("Logout successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

export default TenantUser;
