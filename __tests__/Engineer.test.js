import Engineer from "../lib/Engineer.js";

describe("Engineer", () => {
  test("Can create an Engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
});
