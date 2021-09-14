import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import render from "./src/template-helper.js";

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const roster = [];
const memberIDs = [];

function init() {
  console.log("Team Profile Generator Initialized");

  function setManager() {
    console.log("No team is complete without someone to manage it.\n");
    inquirer
      .prompt([
        {
          name: "teamManagerName",
          type: "input",
          message: "Enter your Team Manager's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter one or more characters:";
          },
        },
        {
          name: "teamManagerID",
          type: "input",
          message: "Enter your Team Manager's identification number:",
          validate: (answer) => {
            const valid = answer.match(/^[1-9]\d*$/);

            if (valid) {
              return true;
            }
            return "Identification number must be greater than zero (0):";
          },
        },
        {
          name: "teamManagerEmail",
          type: "input",
          message: "Enter your Team Manager's E-mail address:",
          validate: (answer) => {
            const valid = answer.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            );

            if (valid) {
              return true;
            }
            return "Enter a valid e-mail address:";
          },
        },
        {
          name: "teamManagerOfficeNumber",
          type: "input",
          message: "Enter your Team Manager's Office number:",
          validate: (answer) => {
            const valid = answer.match(/^[1-9]\d*$/);

            if (valid) {
              return true;
            }
            return "Office number must be greater than zero (0):";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.teamManagerName,
          answers.teamManagerID,
          answers.teamManagerEmail,
          answers.teamManagerOfficeNumber
        );

        roster.push(manager);

        memberIDs.push(answers.teamManagerID);

        setRoster();
      });
  }

  function setRoster() {
    inquirer
      .prompt([
        {
          name: "newTeamMember",
          type: "list",
          message: " Select a member for your team:",
          choices: ["Engineer", "Intern", "My team is complete."],
        },
      ])
      .then((userSelection) => {
        switch (userSelection.newTeamMember) {
          case "Engineer":
            setEngineer();
            break;
          case "Intern":
            setIntern();
            break;
          default:
            setTeam();
        }
      });
  }

  function setEngineer() {
    inquirer
      .prompt([
        {
          name: "engineerName",
          type: "input",
          message: "Enter your Engineer's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter one or more characters:";
          },
        },
        {
          name: "engineerID",
          type: "input",
          message: "Enter your Engineer's identification number:",
          validate: (answer) => {
            const valid = answer.match(/^[1-9]\d*$/);

            if (valid) {
              if (memberIDs.includes(answer)) {
                return "Enter a UNIQUE identification number:";
              } else {
                return true;
              }
            }
            return "Identification number must be greater than zero (0):";
          },
        },
        {
          name: "engineerEmail",
          type: "input",
          message: "Enter your Engineer's E-mail address:",
          validate: (answer) => {
            const valid = answer.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            );

            if (valid) {
              return true;
            }
            return "Enter a valid e-mail address:";
          },
        },
        {
          name: "engineerGitHub",
          type: "input",
          message: "Enter your Engineer's GitHub username:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter one or more characters:";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGitHub
        );

        roster.push(engineer);

        memberIDs.push(answers.engineerID);

        setRoster();
      });
  }
  function setIntern() {
    inquirer
      .prompt([
        {
          name: "interName",
          type: "input",
          message: "Enter your Intern's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter one or more characters:";
          },
        },
        {
          name: "internID",
          type: "input",
          message: "Enter your Intern's identification number:",
          validate: (answer) => {
            const valid = answer.match(/^[1-9]\d*$/);

            if (valid) {
              if (memberIDs.includes(answer)) {
                return "Enter a UNIQUE identification number:";
              } else {
                return true;
              }
            }
            return "Identification number must be greater than zero (0):";
          },
        },
        {
          name: "internEmail",
          type: "input",
          message: "Enter your Intern's E-mail address:",
          validate: (answer) => {
            const valid = answer.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            );

            if (valid) {
              return true;
            }
            return "Enter a valid e-mail address:";
          },
        },
        {
          name: "internSchool",
          type: "input",
          message: "Enter your Intern's school:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter one or more characters:";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        );

        roster.push(intern);

        memberIDs.push(answers.internID);

        setRoster();
      });
  }
  function setTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(roster), "utf-8");
  }

  setManager();
}
init();
