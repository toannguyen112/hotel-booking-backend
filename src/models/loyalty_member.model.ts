import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
import LoyaltyProgram from "./loyalty_program.model";
@Table({
    tableName: "loyalty_members",
    timestamps: true,
})
class LoyaltyMember extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_loyalMem_id: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_loyalMem_loyaProgId: string;

    @Column
    t_loyalMem_contactid: string;

    @Column
    t_loyalMem_name: string;

    @Column
    t_loyalMem_loyalNumber: string;

    @Column
    t_loyalMem_enrollment: Date;

    @Column
    t_loyalMem_status: string;

    @Column
    t_loyalMem_currentTier: string;

    @Column
    t_loyalMem_tierUpgradedDate: Date;

    @Column
    t_loyalMem_firstEarnDate: Date;

    @Column
    t_loyalMem_lastEarnDate: Date;

    @Column
    t_loyalMem_nextTier: string;

    @Column
    t_loyalMem_nextTierPoints: number;

    @Column
    t_loyalMem_resetDate: Date;

    @Column
    t_loyalMem_qualifiedPoints: number;

    @Column
    t_loyalMem_awardedPoints: number;

    @Column
    t_loyalMem_availablePoints: number;

    @Column
    t_loyalMem_totalPoints: number;

    @Column
    t_loyalMem_qualifiedOders: number;

    @Column
    t_loyalMem_earnedVoucher: number;

    @Column
    t_loyalMem_recordOwner: string;

    @Column
    t_loyalMem_created_by: string;

    @CreatedAt
    t_loyalMem_created_date: Date;

    @Column
    t_loyalMem_lastModified_by: string;

    @UpdatedAt
    t_loyalMem_lastModified_date: Date;

    @BeforeCreate
    static randomId(instance: LoyaltyMember) {
        instance.t_loyalMem_id = `LME${Helper.randomString(20)}`;
        instance.t_loyalMem_loyalNumber = `MEM${Helper.randomString(20)}`;
    }

    @BelongsTo(() => LoyaltyProgram)
    loyalty_program: LoyaltyProgram;
}

export default LoyaltyMember;
