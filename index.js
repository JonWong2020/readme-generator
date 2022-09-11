const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';

// questions array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are your contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is your test information?'
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: [
            'MIT',
            'Apache',
            'ISC',
            'GNU GPLv3'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
