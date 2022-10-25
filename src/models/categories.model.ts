import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "categories",
  timestamps: true,
})
export default class Category extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  link: string;

  @Column
  image: string;
}
