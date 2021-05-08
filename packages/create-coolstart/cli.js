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
        ${chalk.greenBright("--template")} template

    ${chalk.blue.bold("Templates")}
        ${chalk.greenBright("default")} base 11ty template (will be default)
        ${chalk.greenBright("prismic")} 11ty Prismic template
`,
  {
    flags: {
      template: {
        type: "string",
        default: "default",
        isRequired: false,
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

// Show the help screen if the template doesn't exist
if (!templateExists) {
  cli.showHelp(0);
}

// Initialize project with the correct template
const template = pathToTemplate + currentTemplate;

initit({ name, template })
  .then((res) => {
    console.log(`Created project: ${name} with ${currentTemplate} template`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(chalk.bgRedBright(`Failed to create project: ${name}`));
    console.error(err);
    process.exit(1);
  });
