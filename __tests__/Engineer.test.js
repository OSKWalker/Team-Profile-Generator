import Engineer from "../lib/Engineer.js";

describe("Engineer", () => {
  test("Can create an Engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  test("Can set the engineer GitHub username via constructor arguments", () => {
    const conArg = "GitHub";
    const engineer = new Engineer("Name", 123, "example@arguments.com", conArg);
    expect(engineer.github).toBe(conArg);
  });

  test("Can get the engineer GitHub username via constructor arguments", () => {
    const conArg = "GitHub";
    const engineer = new Engineer("Name", 123, "example@arguments.com", conArg);
    expect(engineer.getGitHub()).toBe(conArg);
  });

  test('getRole() method should return "Engineer"', () => {
    const conArg = "Engineer";
    const engineer = new Engineer(
      "Name",
      123,
      "example@arguments.com",
      "GitHub"
    );
    expect(engineer.getRole()).toBe(conArg);
  });
});
