import Employee from "../lib/Employee.js";

describe("Employee", () => {
  test("Can create an Employee instance", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  test("Can set the employee name via constructor arguments", () => {
    const name = "Ikora";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("Can set the employee ID via constructor arguments", () => {
    const conArg = 213;
    const employee = new Employee("Name", conArg);
    expect(employee.id).toBe(conArg);
  });

  test("Can set the employee email via constructor arguments", () => {
    const conArg = "example@arguments.com";
    const employee = new Employee("Name", 123, conArg);
    expect(employee.email).toBe(conArg);
  });

  test("Can get the employee name via getName() method", () => {
    const conArg = "Ikora";
    const employee = new Employee(conArg);
    expect(employee.getName()).toBe(conArg);
  });

  test("Can get the employee id via getID() method", () => {
    const conArg = 213;
    const employee = new Employee("Name", conArg);
    expect(employee.getID()).toBe(conArg);
  });

  test("Can get the employee email via getEmail() method", () => {
    const conArg = "example@arguments.com";
    const employee = new Employee("Name", 123, conArg);
    expect(employee.getEmail()).toBe(conArg);
  });

  test('getRole() method should return "Employee"', () => {
    const conArg = "Employee";
    const employee = new Employee("Name", 123, "example@arguments.com");
    expect(employee.getRole()).toBe(conArg);
  });
});
