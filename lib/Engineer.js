// makes the data usable from the employee class
const Employee = require('./Employee');

// extends the subclass to the manager class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
    }

    //returns the role of engineer
    getRole() {
        return 'Engineer'
    }

    //returns the office number that was inputted
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;