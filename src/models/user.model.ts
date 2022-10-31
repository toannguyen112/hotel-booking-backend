import { Table, PrimaryKey, Column, Model, ForeignKey, DataType } from "sequelize-typescript";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import Admin from "./admin.model";
import Helper from "../utils/helpers";

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

  async hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 8);
    return hashedPassword;
  }

  async handleLogin(req: Request, res: Response) {
    try {
      const foundUser = await User.findOne({ where: { username: req.body.username } });

      if (!foundUser) return res.status(500).send("Name of user is not correct");

      const isMatch: boolean = bcrypt.compareSync(req.body.password, foundUser.password);

      if (isMatch) {

        const token = Helper.generateToken(foundUser);

        return res.status(200).json({
          message: "login successfully",
          user: foundUser,
          token: token,
        });
      }

      return res.status(500).send("Password is not correct");

    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  async handleRegister(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const foundUser = await User.findOne({ where: { username } });

      if (foundUser) return res.status(200).json({ message: "User is exit" });

      const hashPassword = await this.hashPassword(password);

      const admin = await Admin.findOne();

      const newUser = await User.create({
        username: username,
        admin_id: admin.id,
        password: hashPassword,
      });

      Helper.generateToken(newUser);

      return res.status(200).json({
        message: "Register successfully",
        data: newUser,
      });

    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  async handleLogout(req: Request, res: Response) {
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
