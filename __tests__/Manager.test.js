import Manager from "../lib/Manager.js";

describe("Manager", () => {
  test("Can create a Manager instance", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
});
