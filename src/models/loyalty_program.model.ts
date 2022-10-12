import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey, BeforeCreate, HasMany } from "sequelize-typescript";
import Helper from "../utils/helpers";
import Tenant from "./tenant.model";
import BenefitType from "./benefit_type.model";
import LoyaltyPromotion from "./loyalty_promotion.model";
@Table({
    tableName: "loyalty_programs",
    timestamps: true,
})
class LoyaltyProgram extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_loyalProg_id: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id: string;

    @Column
    t_loyalProg_name: string;

    @Column
    t_loyalProg_status: string;

    @Column
    t_loyalProg_transQuaPt: boolean;

    @Column
    t_loyalProg_tierReCycle: string;

    @Column
    t_loyalProg_tierStartDate: Date;

    @Column
    t_loyalProg_lastTierReDate: Date;

    @Column
    t_loyalProg_nextTierReDate: Date;

    @Column
    t_loyalProg_desc: string;

    @Column
    t_loyalProg_recordOwner: string;

    @Column
    t_loyalProg_created_by: string;

    @Column
    t_loyalProg_lastModified_by: string;

    @CreatedAt
    t_loyalProg_created_date: Date;

    @UpdatedAt
    t_loyalProg_lastModified_date: Date;

    @BelongsTo(() => Tenant)
    tenant: Tenant;

    @HasMany(() => BenefitType)
    benefit_types: BenefitType[];

    @HasMany(() => LoyaltyPromotion)
    loyalty_promotions: LoyaltyPromotion[];

    @BeforeCreate
    static randomId(instance: LoyaltyProgram) {
        const { t_schema_id } = global.user;
        instance.t_loyalProg_id = `LOY${Helper.randomString(20)}`;
        instance.t_schema_id = t_schema_id;
    }
}

export default LoyaltyProgram;
