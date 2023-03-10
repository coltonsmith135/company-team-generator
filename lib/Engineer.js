// makes the data usable from the employee class
const Employee = require('./Employee');

// extends the subclass to the manager class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    //returns the role of engineer
    getRole() {
        return 'Engineer'
    }

    //returns the office number that was inputted
    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;