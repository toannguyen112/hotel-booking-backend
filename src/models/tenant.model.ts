import { Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
  tableName: "tenants",
  timestamps: true,
})
class Tenant extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Tenant;
