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
        if (answers.addMember === true) {
            chooseRole();
        } else {
            // console.log(staffData)
            cardMaker(staffData);
            const createHTML = generateHTML(staffString)

            fs.writeFile('index.html', createHTML, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!'))
            // console.log(createHTML)

        }
    })
}

function chooseRole() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'roles',

            choices: [Engineer, Intern]
        }
    ]).then((answers) => {
        if (answers.roles === 'Engineer') {
            createEngineer();
        }
        if (answers.roles === 'Intern') {
            createIntern();
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
        addingTeam();
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
        addingTeam();
    })
}

const staffCards = []
let   staffString = ''

const cardMaker = (staffData) => {
    let memberRole = ``
    staffData.forEach((person) => {
    //  console.log(person.getRole())
        if (person.getRole() === 'Manager') {
            memberRole = `Office Number: ${person.officeNumber}`
        }
        if (person.getRole() === 'Engineer') {
            memberRole = `Github: ${person.github}`
        }
        if (person.getRole() === 'Intern') {
            memberRole = `School: ${person.school}`
        }

        let card = ` <div class="card employee-card">
        <div class="card-head">
            <h2 class="card-title">${person.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2">${person.getRole()}</i></h3>
        </div>
        <div class="card-body">
            <ul class="info">
               <li class="info-item">Id: ${person.id}</li>
               <li class="info-item"><a href="https://yahoo.com/${person.email}"> Email: ${person.email}</a></li>
               <li class="info-item">${memberRole}</li>
            </ul>
        </div>
    </div>`

        staffCards.push(card)
    })
    staffString = staffCards.join('')
    // console.log(staffString)
}
createManager();