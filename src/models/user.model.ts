import { Table, PrimaryKey, Column, Model } from "sequelize-typescript";

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
  username: string;

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
