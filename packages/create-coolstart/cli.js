#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const meow = require("meow");
const chalk = require("chalk");
const initit = require("initit");

const cli = meow(
  `
    ${chalk.blue.bold("Usage")}
        ${chalk.greenBright("$")} npm init coolstart <project-name>
        ${chalk.greenBright("$")} npm init coolstart -t prismic <project-name>
        

    ${chalk.blue.bold("Flags")}
        ${chalk.greenBright("--template")}, ${chalk.greenBright("-t")} template

    ${chalk.blue.bold("Templates")}
        ${chalk.greenBright("default")} base 11ty template (will be default)
        ${chalk.greenBright("prismic")} 11ty Prismic template
`,
  {
    flags: {
      template: {
        type: "string",
        alias: "t",
        default: "default",
      },
    },
  }
);

const [name] = cli.input;

if (!name) {
  cli.showHelp(0);
}

// Initialize the correct template based off the cli
const availableTemplates = ["default", "prismic"];
const pathToTemplate = "frzrbox/coolstart/templates/";

const currentTemplate = cli.flags.template.toLowerCase();
const templateExists = availableTemplates.includes(currentTemplate);

if (!templateExists) {
  cli.showHelp(0);
}

console.log(pathToTemplate + currentTemplate);
