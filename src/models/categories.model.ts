import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, PrimaryKey, HasMany } from "sequelize-typescript";

@Table({
  tableName: "categories",
  timestamps: true,
})
export default class Category extends Model {}
