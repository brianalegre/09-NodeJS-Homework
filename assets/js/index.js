// Node Variables
const inquirer = require('inquirer');
const fs = require('fs');
const { windowCount } = require('rxjs');

const questions = [
	{
		type: 'input',
		// File Name
		name: 'project',
		message: 'What is your project name?',
		// default: 'Node Project',
	},
	{
		type: 'input',
		message: 'Describe your application?',
		name: 'description',
		// default: 'It does stuff',
	},
	{
		type: 'input',
		message: 'How do I install your application?',
		name: 'install',
		// default: 'Copy Pasta',
	},
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
		// default: 'Gaining EXP with Node',
	},
	{
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['BSD', 'MIT', 'GPL'],
	},
	{
		type: 'input',
		message: 'What are the guidelines to contributing?',
		name: 'contribute',
		// default: 'You can NOT',
	},
	{
		type: 'input',
		message: 'How do I test your application?',
		name: 'test',
		// default: 'Play with it',
	},
	{
		type: 'input',
		message: 'What is your Github Username?',
		name: 'github',
		// default: 'BrianAlegre',
	},
	{
		type: 'input',
		message: 'Please enter in your email',
		name: 'email',
		// default: 'brialegre@yahoo.com',
	},
];

const createReadme = (data) => {
	var license = '';
	switch (data.license[0]) {
		case 'BSD':
			license =
				'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
			break;
		case 'MIT':
			license =
				'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
			break;
		case 'GPL':
			license =
				'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
			break;
		default:
			license = 'No License Chosen';
			break;
	}
	fs.writeFileSync(
		'./readme.md',
		`# ${data.project}

## License
- Code released under:  ${license}

## Table of Contents
- [Description](#Description)
- [Preview](#Preview)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Test Instructions](#Test-Instructions)
- [Questions](#Questions)

## Description
- ${data.description}

## Preview
- Link to preview GIF

## Installation
- ${data.install}

## Usage
- ${data.usage}

## Contributing
- ${data.contribute}

## Test Instructions
- ${data.test}

## Questions
Questions? Concerns?  Contact Me Below:
- Github Username: ${data.github}
- Github Link: https://github.com/${data.github} 
- Email: ${data.email}
`
	);
};

// CLI Prompts
inquirer.prompt(questions).then((data) => {
	createReadme(data);
	const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;

	fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
		err ? console.log(err) : console.log('Success!')
	);
});
