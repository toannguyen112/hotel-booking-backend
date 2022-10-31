import { Table, PrimaryKey, Column, Model, ForeignKey, DataType } from "sequelize-typescript";
import { Request, Response } from "express";
require('dotenv').config()
import bcrypt from "bcrypt";
import Admin from "./admin.model";
import Helper from "../utils/Helpers";

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


}

export default User;
