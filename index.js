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
        message: 'Who are your contributors?'
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
        name: 'licenses',
        message: 'Please select a license:',
        choices: [
            'MIT',
            'Apache',
            'ISC',
            'GNU GPLv3',
            'No License'
        ],
    }
];

// function to write README
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, function(err) {
        if (err) throw (err);
        console.log('Successfully generated!');
    });
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile(fileName, data)
        });
};

// Function call to initialize app
init();
