import Intern from "../lib/Intern.js";

describe("Intern", () => {
  test("Can create an Intern instance", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
});
