#!/usr/bin/env node
const inquirer = require("inquirer");
const { writeFileSync } = require("fs");
const tsconfigNode = require("./config/tsconfig.node.json");
const tsconfigReact = require("./config/tsconfig.react.json");

const tsconfigs = {
  "node": tsconfigNode,
  "react": tsconfigReact,
};

(async () => {
  const { framework } = await inquirer.prompt([
    {
      type: "list",
      message: "Which framework are you using?",
      name: "framework",
      choices: ["react", "node"]
    }
  ]);

  const cwd = process.cwd();

  writeFileSync(`${cwd}/tsconfig.json`, JSON.stringify(tsconfigs[framework], null, 2));

  console.log("tsconfig.json successfully created");
})()
