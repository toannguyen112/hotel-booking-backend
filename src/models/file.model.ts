import { Table, Model, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "files",
  timestamps: true,
})
export default class File extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  id: number;

  @Column
  filename: string;

  @Column
  disk: string;

  @Column
  path: string;

  @Column
  extension: string;

  @Column
  mime: string;

  @Column
  size: number;

  @Column
  width: number;

  @Column
  height: number;

  static addUnicorn(instance: File) {
    console.log(instance);
  }
}
