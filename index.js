// Include required packages
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',  // License selection using a list
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL', 'Apache 2.0', 'BSD 3-Clause', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'video',
    message: 'Provide a link to your walkthrough video:',
},

];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README file has been created successfully!');
    }
  });
}

// Function to generate markdown for README with Table of Contents and Contact section
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

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Walkthrough Video
Watch the walkthrough video here: [Walkthrough Video](${data.video})

## Contact
- Email: [${data.email}](mailto:${data.email})
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content
      const readmeContent = generateMarkdown(answers);

      // Write the README file
      writeToFile('README.md', readmeContent);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();