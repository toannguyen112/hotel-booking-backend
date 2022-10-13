import { Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
@Table({
  tableName: "tenants",
  timestamps: true,
})
class Tenant extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Tenant;
