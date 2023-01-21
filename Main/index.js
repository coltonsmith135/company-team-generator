// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');


// lib modules
const Manager = require('./lib/Manager');
const Manager = require('./lib/Engineer');
const Manager = require('./lib/Intern');

const staffData = [];

const questions = [
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
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'adding',

            choices: ['Manager', 'Engineer', 'Intern']
        },
      ]

