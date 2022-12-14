// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-green.svg)](${renderLicenseLink(license)})`
  }
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`;
  }
  if (license === 'Apache') {
    return `https://spdx.org/licenses/Apache-2.0.html`;
  }
  if (license === 'ISC') {
    return `https://spdx.org/licenses/ISC.html`;
  }
  if (license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0-standalone.html`;
  }
  if (license === 'No License'){
    return '';
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  } else {
    return `## Licenses
    This project is covered under ${license} license.  Click on the license badge at the top of the README to learn more.`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.licenses)}
  
  ## Contributors
  Contributors: ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.githubName}  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
