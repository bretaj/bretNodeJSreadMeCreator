// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0':
            return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL 3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 3-Clause':
            return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        default:
            return '';    
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    switch (license) {
        case 'MIT':
            return '[License: MIT](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0':
            return '[License: Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
        case 'GPL 3.0':
            return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0.html)';
        case 'BSD 3-Clause':
            return '[License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }
    return `## License\nThis project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.projectTitle}
    
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

    ${renderLicenseSection(data.license)}

    ## Contributing 
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
