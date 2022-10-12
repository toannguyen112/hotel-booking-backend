import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "organizations",
    timestamps: true,
})
export default class Organization extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    org_id?: string;
}


