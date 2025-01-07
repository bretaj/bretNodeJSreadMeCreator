// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

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
            message: 'please write a short description of your project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'what kind of license should your project have?',
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

async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
        console.log('README file has been successfully created!');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userInput = await questions();
        const readmeContent = generateMarkdown(userInput);
        await writeToFile('README.md', readmeContent);
    } catch (err) {
        console.error('Error initializing app:', err);
    }
}

// Function call to initialize app
init();

