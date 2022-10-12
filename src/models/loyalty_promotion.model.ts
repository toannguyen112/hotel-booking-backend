import { Table, Column, PrimaryKey, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";
import LoyaltyProgram from "./loyalty_program.model";

enum LoyaltyPromotionStatus {
    Draft = 'Draft',
    Active = "Active",
    Deactivate = "Deactivate",
    Hold = "Hold"
}

enum PromotionType {
    SUPER = 'Super promotion',
    BACKGROUND = 'Background promotion',
}
@Table({
    tableName: "loyalty_promotions",
    timestamps: true,
})
class LoyaltyPromotion extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_loyaPrm_id: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_loyaPrm_loyaProgId: string;

    @Column
    t_loyaPrm_name: string;

    @Column
    t_loyaPrm_promType: string;

    @Column
    t_loyaPrm_promProdCate: boolean;

    @Column
    t_loyaPrm_promProd: string;

    @Column
    t_loyaPrm_promStartDate: Date;

    @Column
    t_loyaPrm_promEndDate: Date;

    @Column
    t_loyaPrm_status: string;

    @Column
    t_loyaPrm_priority: number;

    @Column
    t_loyaPrm_earnProm: boolean;

    @Column
    t_loyaPrm_startEarnDate: Date;

    @Column
    t_loyaPrm_endEarnDate: Date;

    @Column
    t_loyaPrm_maxEarnPts: number;

    @Column
    t_loyaPrm_startBurnDate: Date;

    @Column
    t_loyaPrm_endBurnDate: Date;

    @Column
    t_loyaPrm_maxBurnPts: number;

    @Column
    t_loyaPrm_maxVch: string;

    @Column
    t_loyaPrm_issuedVch: string;

    @Column
    t_loyaPrm_usedVch: string;

    @Column
    t_loyaPrm_transferPts: boolean;

    @Column
    t_loyaPrm_desc: string;

    @Column
    t_loyaPrm_recordOwner: string;

    @Column
    t_loyaPrm_created_by: string;

    @CreatedAt
    t_loyaPrm_created_date: Date;

    @Column
    t_loyaPrm_lastModified_by: string;

    @UpdatedAt
    t_loyaPrm_lastModified_date: Date;

    // relationships
    @BelongsTo(() => LoyaltyProgram)
    promotion: LoyaltyProgram;
}

export default LoyaltyPromotion;
