/* eslint-disable import/no-extraneous-dependencies */
const session = require("supertest-session");
const app = require("../../src/app.js");
const { conn } = require("../../src/db.js");

const agent = session(app);

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames").expect(200));
  });
  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames/1").expect(200));
  });
  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames/Minecraft").expect(200));
  });
});
