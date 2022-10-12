import { Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, BeforeCreate } from "sequelize-typescript";
import Helper from "../utils/helpers";
@Table({
    tableName: 'tenants',
    timestamps: true,
})
class Tenant extends Model {

    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_schema_id?: string;

    @Column
    t_schName?: string;

    @Column
    t_schStart_date?: Date;

    @Column
    t_schEnd_date?: Date;

    @Column
    t_sch_recordOwner?: string;

    @Column
    t_sch_created_by?: string;

    @Column
    t_sch_lastModified_by?: string;

    @CreatedAt
    t_sch_created_date?: Date;

    @UpdatedAt
    t_sch_lastModified_date?: Date;

    @BeforeCreate
    static randomId(instance: Tenant) {
        instance.t_schema_id = `SCH${Helper.randomString(20)}`;
    }
}

export default Tenant;

