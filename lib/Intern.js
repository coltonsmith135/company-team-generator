// makes the data usable from the employee class
const Employee = require('./Employee');

// extends the subclass to the manager class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    //returns the role of intern
    getRole() {
        return 'Intern'
    }

    //returns the office number that was inputted
    getOfficeNumber() {
        return this.school;
    }
}

module.exports = Intern;