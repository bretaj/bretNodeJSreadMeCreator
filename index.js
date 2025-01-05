// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'git',
            message: 'what is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your e-mail address?',
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'what is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'what command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'what command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'what does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'what does the user need to know about contributing to the repo?',
        },
    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
