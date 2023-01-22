// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');


// lib modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const staffData = [];

const createEmployee = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the team managers id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the team managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the team managers office number?',
            name: 'office'
        }
       
    ]
    ).then((answers) => {
        const { name } = answers
        const { id } = answers
        const { email } = answers
        const { office } = answers
        const { adding } = answers

        if ( === ) {
            createEngineer();
        } else if ('intern' === intern) {
            createIntern();
        }

    })
}

function addingTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'adding',

            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
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
            message: 'What is the team interns office number?',
            name: 'office'
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
            message: 'What is the team engineers office number?',
            name: 'office'
        }
    ])
}


createEmployee();


