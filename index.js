import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "my-team.html");

import render from "./src/template-helper.js";
console.log(render());
