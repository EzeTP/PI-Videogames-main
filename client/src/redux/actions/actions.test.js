import { filterApi, filterDb, FILTER_API, FILTER_DB } from "./actions";

describe("Action Creatos", () => {
  it("Deberia existir mi action type:FILTER_GENDER y payload su valor lo recibe por argumento", () => {
    expect(filterApi("Action")).toEqual({
      type: FILTER_API,
      payload: "Action",
    });
  });
});
describe("Action Creatos", () => {
  it("Deberia existir mi action type:FILTER_GENDER y payload su valor lo recibe por argumento", () => {
    expect(filterDb("Action")).toEqual({
      type: FILTER_DB,
      payload: "Action",
    });
  });
});
