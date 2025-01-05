// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

     ## Installation
    To install dependencies, run the following command:
    ${data.dependencies}
   
    ## Usage
    ${data.repo}

    ## License
    This project is licensed under the ${data.license} license.

    ## Constributing 
    ${data.contribute}

    ## Tests
    To run tests, use the following command 
    ${data.tests}
    
    ## Questions
    If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}).
    GitHub: [${data.git}](https://github.com/${data.git})
`;
}

export default generateMarkdown;
