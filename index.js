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
    message: "What the app does?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the project?",
  },
  {
    type: "input",
    name: "contributions",
    message: "How to make contributions?",
  },
  {
    type: "input",
    name: "tests",
    message: "What is the testing process for your project?",
  },
  {
    type: "input",
    name: "licenseName",
    message: "What is the license name?",
  },
  {
    type: "input",
    name: "questions",
    message: "What is your contact info?",
  },
];

// Create a function to write README file
function generateReadme(answers) {
  return `
# ${answers.title}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing Process](#testing-process)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contributions}

## Testing process
${answers.tests}

## License
${"This project is licensed under the"} ${[answers.licenseName]}

## Questions
${answers.questions}

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
