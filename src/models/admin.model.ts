import { Table, PrimaryKey, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "admins",
  timestamps: true,
})
class Admin extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: string;

  @Column
  name: string;

  @Column
  username: string;

  @Column
  address: string;

  @Column
  phone: string;

}

export default Admin;
