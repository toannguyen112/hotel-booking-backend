import { Table, Column, Model, PrimaryKey, BelongsTo, ForeignKey } from "sequelize-typescript";
import Category from "./categories.model";
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
  id: number;

  @ForeignKey(() => Category)
  @Column
  category_id: number;

  @ForeignKey(() => Tenant)
  @Column
  tenant_id: number;

  @Column
  name: string;

  @Column
  star: number;

  @Column
  status: string;

  @Column
  info: string;

  @Column
  address: string;

  @Column
  price: number;

  @Column
  image: string;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsTo(() => Tenant)
  tenant: Tenant;
}
