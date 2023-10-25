// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What the app is for?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the app?",
  },
  {
    type: "input",
    name: "issues",
    message: "How to report issues?",
  },
  {
    type: "input",
    name: "contributions",
    message: "How to make contributions?",
  },
];

// Create a function to write README file
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## How to report issues?
${answers.issues}

## How to make contributions?
${answers.contributions}
`;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully generated ${fileName}`);
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Use the answers to generate the README content
    const readmeContent = generateReadme(answers);
    // Write the content to a file
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
