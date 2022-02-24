const { Genre, conn } = require("../../src/db.js");

describe("Genre model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se puede conectar a la base de datos:", err);
    })
  );
  describe("validar nombre Action", () => {
    it("debería funcionar cuando es un nombre válido", () => {
      Genre.create({ name: "Action" });
    });
  });
});
