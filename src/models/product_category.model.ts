import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, PrimaryKey, HasMany, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
import LoyaltyProgram from "./loyalty_program.model";
import Product from "./product.model";
import Tenant from "./tenant.model";
@Table({
    tableName: 'product_categories',
    timestamps: true,
})
export default class ProductCategory extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
        unique: true
    })
    t_prodCate_id?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_loyalProg_id?: string;

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
    products!: Product

    @BeforeCreate
    static randomId(instance: ProductCategory, options: any) {
        instance.t_prodCate_id = `PRC${Helper.randomString(20)}`;
    }
}


