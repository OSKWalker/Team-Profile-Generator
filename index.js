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
            return "Enter one or more characters.";
          },
        },
        {
          name: "managerID",
          type: "input",
          message: "Enter your Team Manager's identification number:",
          validate: (answer) => {
            const valid = answer.match(/^[1-9]\d*$/);

            if (valid) {
              return true;
            }
            return "Identification number must be greater than zero (0).";
          },
        },
        {
          name: "managerEmail",
          type: "input",
          message: "Enter your Team Manager's E-mail address:",
          validate: (answer) => {
            const valid = answer.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            );

            if (valid) {
              return true;
            }
            return "Enter a valid e-mail address.";
          },
        },
        {
          name: "managerOfficeNumber",
          type: "input",
          message: "Enter your Team Manager's Office number:",
          validate: (answer) => {
            const valid = answer.match(/^[1-9]\d*$/);

            if (valid) {
              return true;
            }
            return "Office number must be greater than zero (0)";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNumber
        );

        roster.push(manager);

        memberIDs.push(answers.managerID);

        fillRoster();
      });
  }

  function fillRoster() {
    inquirer
      .prompt([
        {
          name: "newMember",
          type: "list",
          message: " Select a member for your team:",
          choices: ["Engineer", "Intern", "My team is complete."],
        },
      ])
      .then((userSelection) => {
        switch (userSelection.newMember) {
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
}
