import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "rooms",
  timestamps: true,
})
export default class Room extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: false,
  })
  id: number;

  @Column
  name: string;

  @Column
  star: number;

  @Column
  status: string;

  @Column
  info: string;

  @Column
  address: string;

  @Column
  price: number;

  @Column
  image: string;
}
