// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "checkbox",
    message: "What licenses are you using?",
    choices: ["MIT", "GNU", "Apache", "ISC", "non"],
    name: "license",
  },
  {
    type: "input",
    message: "Please write a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation_Instructions",
  },
  {
    type: "input",
    message: "Who would you like to credit for this project?",
    name: "credits",
  },
  {
    type: "input",
    message: "What is the usage information for your project?",
    name: "usage_Information",
  },
  {
    type: "input",
    message: "What are the features of your project?",
    name: "features",
  },
  {
    type: "input",
    message: "What are the contribution guidelines of your project?",
    name: "contribution_Guidelines",
  },
  {
    type: "input",
    message: "What are the test instructions of your project?",
    name: "test_Instructions",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// Creates README file
function writeToFile(data) {
  fs.writeFile("newREADME.md", data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Initializes app
//Creates a string, saves it to a file
async function init() {
  var promptInput = await inquirer.prompt(questions);
  console.log(promptInput);
  var aString = generateMarkdown(promptInput);
  writeToFile(aString);
}

// Function call to initialize app
init();
