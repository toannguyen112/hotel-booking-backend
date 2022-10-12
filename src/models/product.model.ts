import { Table, Column, Model, CreatedAt, UpdatedAt, BelongsTo, ForeignKey, PrimaryKey, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
import ProductCategory from "./product_category.model";
import Tenant from "./tenant.model";

@Table({
  tableName: "products",
  timestamps: true,
})
export default class Product extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  t_prod_id!: string;

  @ForeignKey(() => ProductCategory)
  @Column
  t_prod_prodCateId!: string;

  @ForeignKey(() => Tenant)
  @Column
  t_prod_schemaID!: string;

  @Column
  t_prod_name!: string;

  @CreatedAt
  t_prod_created_date!: Date;

  @UpdatedAt
  t_prod_lastModified_date!: Date;

  // relationship
  @BelongsTo(() => ProductCategory)
  product_category!: ProductCategory;

  @BeforeCreate
  static randomId(instance: Product, options: any) {
    instance.t_prod_id = `PRO${Helper.randomString(20)}`;
  }
}
