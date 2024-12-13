
// Function that returns a license badge based on the license passed in
// If there is no license or "None" is selected, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPL':
      return '![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)';
    case 'Apache 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'BSD 3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'ISC':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license or "None" is selected, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL':
      return '[GPL License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'ISC':
      return '[ISC License](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license or "None" is selected, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  
  return `
## License
This project is licensed under the ${license} license. For more information, please visit ${licenseLink}.
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Walkthrough Video](#walkthrough-video)
- [Contact](#contact)

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Walkthrough Video
Watch the walkthrough video here: [Walkthrough Video](${data.video})

${renderLicenseLink(data.license)}

## Contact
For any questions or suggestions, feel free to contact:
- Email: [${data.email}](mailto:${data.email})
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

export default generateMarkdown;