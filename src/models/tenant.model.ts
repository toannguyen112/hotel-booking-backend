import { Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";

interface typeTokens {
  token: string
}
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

  @Column
  username: string

  @Column
  name: string

  @Column
  phone: number

  @Column
  password: string

  @Column
  address: string

  @Column
  status: string

  @Column({
    type: DataType.JSON,
    get() {
      return this.getDataValue('tokens');
    }
  })
  tokens: Array<typeTokens>;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Tenant;
