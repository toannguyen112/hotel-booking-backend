import { Table, Model } from "sequelize-typescript";

@Table({
  tableName: "contacts",
  timestamps: true,
})
export default class Contact extends Model {}
