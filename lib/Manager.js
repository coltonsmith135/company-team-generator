// makes the data usable from the employee class
const Employee = require('./Employee');

// extends the subclass to the manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    //returns the role of manager
    getRole() {
        return 'Manager'
    }

    //returns the office number that was inputted
    getOfficeNumber() {
        return this.officeNumber;
    }

}
module.exports = Manager;