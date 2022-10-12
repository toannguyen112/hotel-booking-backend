import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from "sequelize-typescript";
import Tenant from "./tenant.model";

@Table({
    tableName: 'tenant_users',
    timestamps: true,
})
class TenantUserRole extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
    })
    t_usrRole_id?: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id?: string;

    @Column
    t_roleName?: string;

    @Column
    t_usr_access?: boolean;

    @Column
    t_biz_access?: boolean;

    @Column
    t_indi_access?: boolean;

    @Column
    t_indiConsent_access?: boolean;

    @Column
    t_indiPref_access?: boolean;

    @Column
    t_prodCate_access?: boolean;

    @Column
    t_prod_access?: boolean;

    @Column
    t_loyaProg_access?: boolean;

    @Column
    t_loyaCurr_access?: boolean;

    @Column
    t_loyaMemb_access?: boolean;

    @Column
    t_loyalTier_access?: boolean;

    @Column
    t_tierRules_access?: boolean;

    @Column
    t_benefitType_access?: boolean;

    @Column
    t_voucherDef_access?: boolean;

    @Column
    t_voucher_access?: boolean;

    @Column
    t_loyaPromo_access?: boolean;

    @Column
    t_promoMemb_access?: boolean;

    @Column
    t_promoCurr_access?: boolean;

    @Column
    t_promoProd_access?: boolean;

    @Column
    t_manualTrx_access?: boolean;

    @Column
    t_usr_recordOwner?: string;

    @Column
    t_usr_created_by?: string;

    @Column
    t_usr_lastModified_by?: string;

    @CreatedAt
    t_usr_created_date?: Date;

    @UpdatedAt
    t_usr_lastModified_date?: Date;

    @BelongsTo(() => Tenant)
    tenant?: Tenant

}

export default TenantUserRole;

