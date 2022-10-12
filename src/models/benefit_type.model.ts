import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";
import LoyaltyProgram from "./loyalty_program.model";
import VoucherDefinition from "./voucher_definition.model";

@Table({
    tableName: "benefit_types",
    timestamps: true,
})
class BenefitType extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_benfType_id?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_benfType_loyaProgId?: string;

    @Column
    t_benfType_name?: string;

    @Column
    t_benfType_type?: string;

    @Column
    t_benfType_status?: string;

    @Column
    t_benfType_amount?: string;

    @ForeignKey(() => VoucherDefinition)
    @Column
    t_benfType_vchDefId?: string;

    @Column
    t_benfType_desc?: string;

    @Column
    t_benfType_recordOwner?: string;

    @Column
    t_benfType_created_by?: string;

    @CreatedAt
    t_benfType_created_date?: Date;

    @Column
    t_benfType_lastModified_by?: string;

    @UpdatedAt
    t_benfType_lastModified_date?: Date;
}

export default BenefitType;
