import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, PrimaryKey, HasMany } from "sequelize-typescript";

import Product from "./product.model";
import Tenant from "./tenant.model";
@Table({
  tableName: "product_categories",
  timestamps: true,
})
export default class ProductCategory extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
    unique: true,
  })
  @ForeignKey(() => Tenant)
  @Column
  t_schema_id?: string;

  @Column
  t_prodCate_name?: string;

  @Column
  t_prodCate_code?: string;

  @Column
  t_prodCate_brand?: string;

  @Column
  t_prodCate_desc?: string;

  @Column
  t_prodCate_recordOwner?: string;

  @Column
  t_prodCate_created_by?: string;

  @Column
  t_prodCate_lastModified_by?: string;

  @CreatedAt
  t_prodCate_created_date?: Date;

  @UpdatedAt
  t_prodCate_lastModified_date?: Date;

  // relationship
  @HasMany(() => Product)
  products!: Product;
}
