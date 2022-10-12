import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
import LoyaltyProgram from "./loyalty_program.model";
import LoyaltyPromotion from "./loyalty_promotion.model";

enum VoucherType {
    Percentage = "Percentage",
    Amount = "Amount",
}

enum Status {
    Draft = "Draft",
    Active = "Active",
    Deactivate = "Deactivate",
}
@Table({
    tableName: "voucher_definitions",
    timestamps: true,
})
class VoucherDefinition extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_vouchrDef_id?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_vouchrDef_loyaProgId?: string;

    @Column
    t_vouchrDef_name?: string;

    @Column
    t_vouchrDef_vchDefType?: string;

    @Column
    t_vouchrDef_Status?: boolean;

    @ForeignKey(() => LoyaltyPromotion)
    @Column
    t_vouchrDef_loyaPromId?: string;

    @Column
    t_vouchrDef_vchType?: string;

    @Column
    t_vouchrDef_productPromotion?: string;

    @Column
    t_vouchrDef_disctPerc?: number;

    @Column
    t_vouchrDef_disctAmt?: number;

    @Column
    t_vouchrDef_maxdisctAmt?: number;

    @Column
    t_vouchrDef_PtsToBurn?: number;

    @Column
    t_vouchrDef_startDate?: Date;

    @Column
    t_vouchrDef_endDate?: number;

    @Column
    t_vouchrDef_extendDate?: number;

    @Column
    t_vouchrDef_vchDuration?: string;

    @Column
    t_vouchrDef_maxIssueVch?: string;

    @Column
    t_vouchrDef_vchPrefix?: string;

    @Column
    t_vouchrDef_vchSuffix?: string;

    @Column
    t_vouchrDef_desc?: string;

    @Column
    t_vouchrDef_recordOwner?: string;

    @Column
    t_vouchrDef_created_by?: string;

    @CreatedAt
    t_vouchrDef_created_date?: Date;

    @Column
    t_vouchrDef_lastModified_by?: string;

    @UpdatedAt
    t_vouchrDef_lastModified_date?: Date;

    @BeforeCreate
    static randomId(instance: VoucherDefinition) {
        instance.t_vouchrDef_id = `VOD${Helper.randomString(20)}`;
    }
}

export default VoucherDefinition;
