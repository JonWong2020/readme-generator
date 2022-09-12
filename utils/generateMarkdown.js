const fs = require('fs');

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-green.svg)](${renderLicenseLink(license)})`
  }
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'Apache') {
    return `https://spdx.org/licenses/Apache-2.0.html`
  }
  if (license === 'ISC') {
    return `https://spdx.org/licenses/ISC.html`
  }
  if (license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0-standalone.html`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
