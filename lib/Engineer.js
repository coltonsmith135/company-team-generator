// makes the data usable from the employee class
const Employee = require('./Employee');

// extends the subclass to the manager class
class Engineer extends Employee {
    constructer(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    //returns the role of engineer
    getRole() {
        return 'Engineer'
    }

    //returns the office number that was inputted
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Engineer;