const session = require("supertest-session");
const app = require("../../src/app.js");
const { conn } = require("../../src/db.js");

const agent = session(app);
describe("Gender routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se puede conectar a la base de datos:", err);
    })
  );

  describe("GET /genres", () => {
    it("debería obtener 200", () => agent.get("/genres").expect(200));
  });
});
