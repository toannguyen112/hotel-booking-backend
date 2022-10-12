import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
import Benefit from "./benefit.model";
import LoyaltyMember from "./loyalty_member.model";
import LoyaltyProgram from "./loyalty_program.model";
import LoyaltyPromotion from "./loyalty_promotion.model";
import VoucherDefinition from "./voucher_definition.model";
@Table({
    tableName: "vouchers",
    timestamps: true,
})
export default class Voucher extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_vouchr_id: string;

    @ForeignKey(() => VoucherDefinition)
    @Column
    t_vouchr_vchDefId: string;

    @ForeignKey(() => Benefit)
    @Column
    t_vouchr_benfId: string;

    @ForeignKey(() => LoyaltyPromotion)
    @Column
    t_vouchr_loyaPromId: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_vouchr_loyaProgId: string;

    @ForeignKey(() => LoyaltyMember)
    @Column
    t_vouchr_loyaMemId: string;

    @Column
    t_vouchr_name: string;

    @Column
    t_vouchr_vchType: string;

    @Column
    t_vouchr_status: string;

    @Column
    t_vouchr_PtsToBurn: number;

    @Column
    t_vouchr_disctedVal: number;

    @Column
    t_vouchr_disctedPerc: number;

    @Column
    t_vouchr_maxDisctedVal: number;

    @Column
    t_vouchr_startDate: Date;

    @Column
    t_vouchr_endDate: Date;

    @Column
    t_vouchr_extDate: Date;

    @Column
    t_vouchr_usedDate: Date;

    @Column
    t_vouchr_issuedSrc: string;

    @Column
    t_vouchr_vchCode: string;

    @Column
    t_vouchr_recordOwner: string;

    @Column
    t_vouchr_created_by: string;

    @CreatedAt
    t_vouchr_created_date: Date;

    @Column
    t_vouchr_lastModified_by: string;

    @UpdatedAt
    t_vouchr_lastModified_date: Date;

    @BelongsTo(() => VoucherDefinition)
    voucher_definition: VoucherDefinition;

    @BelongsTo(() => Benefit)
    benefit!: Benefit;

    @BelongsTo(() => LoyaltyPromotion)
    loyalty_promotion: LoyaltyPromotion;

    @BelongsTo(() => LoyaltyProgram)
    loyalty_program: LoyaltyProgram;

    @BelongsTo(() => LoyaltyMember)
    loyalty_member: LoyaltyMember;

    @BeforeCreate
    static randomId(instance: Voucher) {
        instance.t_vouchr_id = `VOU${Helper.randomString(20)}`;
    }
}

