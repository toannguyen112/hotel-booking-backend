import { Table, Model, PrimaryKey, Column, ForeignKey } from "sequelize-typescript";
import File from "./file.model";
import Room from "./room.model";

@Table({
  tableName: "room_files",
  timestamps: false,
})
export default class RoomFile extends Model {
  
@ForeignKey(() => Room)
  @Column
  room_id: number;

 @ForeignKey(() => File)
  @Column
  file_id: number;

}
