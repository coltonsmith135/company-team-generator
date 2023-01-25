// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');


// lib modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const staffData = [];

const createManager = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name'

        },
        {
            type: 'input',
            message: 'What is the team managers id?',
            name: 'id',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter an id.';

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the team managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the team managers office number?',
            name: 'officeNumber'
        }

    ]
    ).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        staffData.push(manager);





    })
}

function addingTeam() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add a new team member',
            name: 'adding',

            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then((answers) => {
        const { adding } = answers
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the team interns id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the team interns email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the school they attend?',
            name: 'School'
        }

    ])
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team engineers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the team engineers id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the team engineers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the team engineers Github?',
            name: 'Github'
        }
    ])
}





