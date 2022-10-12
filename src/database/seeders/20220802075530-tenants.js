"use strict";
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tenants", [
      {
        t_schema_id: `SCHjww9ud21p1`,
        t_schName: "White Space 20220418-000001",
        t_schStart_date: "2022-04-20",
        t_schEnd_date: "2022-05-20",
        t_sch_recordOwner: "USR202rLJUUI393mMK",
        t_sch_created_by: "USR202rLJUUI393mMK",
        t_sch_created_date: "2022-05-20",
        t_sch_lastModified_by: "USR202rLJUUI393mMK",
        t_sch_lastModified_date: "2022-05-20",
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
