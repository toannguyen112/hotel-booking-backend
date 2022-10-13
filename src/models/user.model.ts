import { Table, PrimaryKey, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: true,
})
class User extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  id: string;
}

export default User;
