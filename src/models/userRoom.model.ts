import { Table, Column, Model, PrimaryKey, BelongsTo, ForeignKey, BelongsToMany } from "sequelize-typescript";
import Room from "./room.model";
import User from "./user.model";

@Table({
  tableName: "user_rooms",
  timestamps: false,
})
export default class UserRoom extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Room)
  @Column
  room_id: number;

}
