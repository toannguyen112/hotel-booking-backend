import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "categories",
  timestamps: true,
})
export default class Category extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  id: number;
}
