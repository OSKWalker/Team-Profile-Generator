import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import { prompt } from "inquirer";
import { resolve, join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import render from "./src/template-helper.js";

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "my-team.html");
const roster = [];
const memberIDs = [];

function init(){
    console.log("Team Profile Generator Initialized");

    inquirer.prompt([
        {
            name: "teamManagerName",
            type: "input",
            message: "Who is your Team Manager?",
            validate: answer =>{
            if (answer !== ""){
                return true;
            }
            return "Please enter one or more characters."
            }
        },
        {
            name: "managerID",
            type: "input",
            message: "Enter your Team Manager's identification number.",
            validate: answer => {
                const valid = answer.match(/^[1-9]\d*$/);
                
                if (valid){
                    return true;
                }
                return "Identification number must be greater than zero (0)."
            }
        },
        {
            
        }
    }
    ])
}

console.log(render());
