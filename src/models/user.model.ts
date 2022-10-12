import { Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'users',
    timestamps: true,
})
class User extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_schema_id?: string;
}

export default User;

