import Manager from "../lib/Manager.js";

describe("Manager", () => {
  test("Can create a Manager instance", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  test("Can set the manager office number via constructor arguments", () => {
    const conArg = 456;
    const manager = new Manager("Name", 123, "example@arguments.com", conArg);
    expect(manager.officeNumber).toBe(conArg);
  });

  test("Can get the manager office number via the getOfficeNumber() method", () => {
    const conArg = 456;
    const manager = new Manager("Name", 123, "example@arguments.com", conArg);
    expect(manager.getOfficeNumber()).toBe(conArg);
  });

  test('getRole() method should return "Manager"', () => {
    const conArg = "Manager";
    const manager = new Manager("Name", 123, "example@arguments.com", 456);
    expect(manager.getRole()).toBe(conArg);
  });
});
