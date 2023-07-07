import { Table, PrimaryKey, Column, Model, ForeignKey, DataType, BelongsToMany } from "sequelize-typescript";
import { Request, Response } from "express";
require('dotenv').config()
import bcrypt from "bcrypt";
import Admin from "./admin.model";
import Helper from "../utils/Helper";
import Room from "./room.model";
import UserRoom from "./userRoom.model";

interface typeTokens {
  token: string
}
@Table({
  tableName: "users",
  timestamps: true,
})
class User extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: string;

  @Column
  name: string;

  @Column
  status: string;

  @ForeignKey(() => Admin)
  @Column
  admin_id: number;

  @Column
  username: string;

  @Column({
    type: DataType.JSON,
    get() {
      return this.getDataValue('tokens');
    }
  })
  tokens: Array<typeTokens>;

  @Column
  password: string;

  @Column
  age: string;


  @Column
  address: string;

  @Column
  phone: string;

  @BelongsToMany(() => Room, { as: "rooms", through: () => UserRoom })

  async login(req: Request, res: Response,): Promise<any> {
    try {
      const foundUser = await User.findOne({ where: { username: req.body.username } });

      if (!foundUser) return res.status(500).send({
        message: "Tên người dùng không chính xác"
      });

      // const isMatch: boolean = bcrypt.compareSync(req.body.password, foundUser.password);

      const isMatch: boolean = req.body.password === foundUser.password;

      if (isMatch) {

        const token = Helper.generateToken(foundUser);

        return res.status(200).json({
          message: "login successfully",
          data: foundUser,
          token: token,
        });
      }

      return res.status(500).send({ message: "Password is not correct" });

    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  async register(req: Request, res: Response): Promise<any> {

    try {
      const { username, password } = req.body;

      const foundUser = await User.findOne({ where: { username } });

      if (foundUser) return res.status(200).json({ message: "User is exit" });

      // const hashPassword = await Helper.hashPassword(password);

      const admin = await Admin.findOne();

      const newUser = await User.create({
        username: username,
        admin_id: admin.id,
        password: password,
      });

      return res.status(200).json({
        message: "Register successfully",
        data: newUser,
      });

    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  async logout(req: Request, res: Response): Promise<any> {
    try {
      req.user.tokens = req.user.tokens.filter((item: any) => { return item.token !== req.token; });
      await req.user.save();
      res.status(200).send({ message: "Logout successfully" });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

}

export default User;
