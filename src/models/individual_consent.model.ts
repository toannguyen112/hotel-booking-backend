import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";
import LoyaltyProgram from "./loyalty_program.model";

@Table({
    tableName: "individual_consents",
    timestamps: true,
})
class IndividualConsent extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_vouchr_id?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_vouchr_vchDefId?: string;
}

export default IndividualConsent;
