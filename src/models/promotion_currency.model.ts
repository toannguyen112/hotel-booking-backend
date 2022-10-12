import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "promotion_currencies",
    timestamps: true,
})
export default class PromotionCurrency extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_vouchr_id?: string;
}


