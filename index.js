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
            name: 'name',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter a name.';

                } else {
                    return true;
                }
            }

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
            name: 'email',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter an email.';

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the team managers office number?',
            name: 'officeNumber',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter an office number.';

                } else {
                    return true;
                }
            }
        }

    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        staffData.push(manager);

console.log(manager);
addingTeam();


    })
}

function addingTeam() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member',
            name: 'addMember'
        }
    ]).then((answers) => {
        if(addMember === true) {
            chooseRole();
        } else {
            generateHTML();
        }
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team interns name?',
            name: 'name',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter a name.';

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the team interns id?',
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
            message: 'What is the team interns email?',
            name: 'email',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter an email.';

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the school they attend?',
            name: 'school',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter a school.';

                } else {
                    return true;
                }
            }
        }

    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        staffData.push(intern);
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team engineers name?',
            name: 'name',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter a name.';

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the team engineers id?',
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
            message: 'What is the team engineers email?',
            name: 'email',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter an email.';

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the team engineers Github?',
            name: 'github',
            validate: (answer) => {

                if (!answer) {
                    return 'please enter a github username';

                } else {
                    return true;
                }
            }
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        staffData.push(engineer);
    })
}

createManager();