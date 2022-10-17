import { Table, Model } from "sequelize-typescript";

@Table({
  tableName: "banners",
  timestamps: true,
})
export default class Banner extends Model {}
