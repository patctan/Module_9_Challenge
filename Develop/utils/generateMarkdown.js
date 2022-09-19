// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//Within inquirer.js, the type should be 'list'
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//The name in the question object properties is can be targeted by doing data.____
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contribution Guidelines](#how-to-contribute)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation_Instructions}
  
  ## Usage
  
  ${data.usage_Information}

  ## Credits

  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribution_Guidelines}
  
  ## Tests
  
  ${data.test_Instructions}
`;
}

module.exports = generateMarkdown;
