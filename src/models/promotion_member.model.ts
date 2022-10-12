import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "promotion_members",
    timestamps: true,
})
class PromotionMember extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_vouchr_id?: string;
}

export default PromotionMember;
