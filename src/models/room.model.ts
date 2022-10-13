import { Table, Column, Model, CreatedAt, UpdatedAt, BelongsTo, ForeignKey, PrimaryKey, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
import ProductCategory from "./categories.model";
import Tenant from "./tenant.model";

@Table({
  tableName: "rooms",
  timestamps: true,
})
export default class Room extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  id!: string;
}
