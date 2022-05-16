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
		default: 'Node Project',
	},
	{
		type: 'input',
		message: 'How do I install your application?',
		name: 'install',
		default: 'Copy Pasta',
	},
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
		default: 'Gaining EXP with Node',
	},
	{
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['1', '2', '3', '4'],
		default: ['3'],
	},
	{
		type: 'input',
		message: 'How do I contribute?',
		name: 'contribute',
		default: 'You can NOT',
	},
	{
		type: 'input',
		message: 'How do I test your application?',
		name: 'test',
		default: 'Play with it',
	},
	{
		type: 'input',
		message: 'What is your Github Username?',
		name: 'github',
		default: 'BrianAlegre',
	},
	{
		type: 'input',
		message: 'Please enter in your email',
		name: 'email',
		default: 'brialegre@yahoo.com',
	},
];

// CLI Prompts
inquirer.prompt(questions).then((data) => {
	const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;

	fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
		err ? console.log(err) : console.log('Success!')
	);
});
