import Intern from "../lib/Intern.js";

describe("Intern", () => {
  test("Can create an Intern instance", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  test("Can set the intern school name via constructor arguments", () => {
    const conArg = "School";
    const intern = new Intern("Name", 123, "example@arguments.com", conArg);
    expect(intern.school).toBe(conArg);
  });

  test("Can get the intern school name via constructor arguments", () => {
    const conArg = "GitHub";
    const intern = new Intern("Name", 123, "example@arguments.com", conArg);
    expect(intern.getSchool()).toBe(conArg);
  });

  test('getRole() method should return "Intern"', () => {
    const conArg = "Intern";
    const intern = new Intern("Name", 123, "example@arguments.com", "School");
    expect(intern.getRole()).toBe(conArg);
  });
});
