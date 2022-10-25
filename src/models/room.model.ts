import { Table, Column, Model, PrimaryKey, BelongsTo, ForeignKey, BelongsToMany } from "sequelize-typescript";
import Category from "./categories.model";
import File from "./file.model";
import RoomFile from "./roomFile.model";
import Tenant from "./tenant.model";

@Table({
  tableName: "rooms",
  timestamps: true,
})
export default class Room extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
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

  @BelongsToMany(() => File, { as: "images", through: () => RoomFile })

  @BelongsTo(() => Category)
  category: Category;

  @BelongsTo(() => Tenant)
  tenant: Tenant;

  public transform(item) {
    return {
      ...item
    }
  }

  public transformDetails(item) {
    return {
      ...item
    }
  }
}
