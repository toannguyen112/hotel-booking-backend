import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";
import BenefitType from "./benefit_type.model";
import LoyaltyMember from "./loyalty_member.model";
import LoyaltyProgram from "./loyalty_program.model";
@Table({
    tableName: "benefits",
    timestamps: true,
})
class Benefit extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_benf_id?: string;

    @ForeignKey(() => BenefitType)
    @Column
    t_benf_benfTypeId?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_benf_loyaProgId?: string;

    @ForeignKey(() => LoyaltyMember)
    @Column
    t_benf_loyaMemId?: string;

    @Column
    t_benf_name?: string;

    @Column
    t_benf_amount?: string;

    @Column
    t_benf_status?: string;

    @Column
    t_benf_expireDate?: Date;

    @Column
    t_benf_issueDate?: Date;

    @Column
    t_prod_recordOwner?: string;

    @Column
    t_benf_recordOwner?: string;

    @Column
    t_benf_created_by?: string;

    @Column
    t_benf_lastModified_by?: string;

    @CreatedAt
    t_benf_created_date?: Date;

    @UpdatedAt
    t_benf_lastModified_date?: Date;

    @BelongsTo(() => BenefitType)
    benefit_type?: BenefitType

    @BelongsTo(() => LoyaltyProgram)
    loyal_program?: LoyaltyProgram

    @BelongsTo(() => LoyaltyMember)
    loyal_member?: LoyaltyMember
}

export default Benefit;
