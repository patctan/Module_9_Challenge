// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "non") {
    return `https://img.shields.io/badge/license-${license}-green.svg`;
  }
  return "";
}

//  Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "non") {
    return `[License](#license)`;
  }
}

// Returns the license section of README
// If there is no license, return an empty string
//Within inquirer.js, the type should be 'list'
function renderLicenseSection(license) {
  if (license !== "non") {
    return `## License
    
  This project is licensed by ${license}`;
  }
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![licenseBadge](${renderLicenseBadge(data.license)})

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - ${renderLicenseLink(data.license)}
  - [Features](#features)
  - [Contribution Guidelines](#how-to-contribute)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation_Instructions}
  
  ## Usage
  
  ${data.usage_Information}

  ## Credits

  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribution_Guidelines}
  
  ## Tests
  
  ${data.test_Instructions}

  ## Questions

  GitHub: www.github.com/${data.gitHub}

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
