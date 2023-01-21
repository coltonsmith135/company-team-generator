// makes the data usable from the employee class
const Employee = require('./Employee');

// extends the subclass to the manager class
class Intern extends Employee {
    constructer(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    //returns the role of intern
    getRole() {
        return 'Intern'
    }

    //returns the office number that was inputted
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Intern;