import request from "supertest"

require("dotenv").config();
const BASE_URL = process.env.BASE_URL;

describe("/tenants", () => {
  it("/get-tenants", async () => {
    expect(1 + 2).toBe(3);

    const tenant = await request(BASE_URL)
      .get("/tenants");
    // const { token } =  await request(BASE_URL).get("/token");
    // const tenant = await request(BASE_URL)
    //               .get("/tenants")
    //               .set('Authorization', `Bearer ${token}`);;
    console.log("Tenant", JSON.stringify(tenant.body));
  });
});