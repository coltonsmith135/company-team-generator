const Manager = require('../lib/Manager');


describe('Manager class', () => {
    test('Testing class Manager structure', () => {
        const e = new Manager();
        expect(typeof (e)).toBe('object');
    });


    it('Checking testname to be name', () => {
        const name = new Manager('natasha')
        expect(name(this.name)).toBe('natasha')
    });

    test('Checking testId to be id', () => {
        const id = new Manager('110')
        expect(this.id).toBe(id)
    });

    it('Checking testEmail to be email', () => {
        const email = new Manager('natasha@yahoo.com')
        expect(Manager([this.email])).toBe(email)
    });

    it('Checking officeNum to be officeNumber', () => {
        const officeNum = new Manager('450')
        expect(Manager([this.getOfficeNumber()])).toBe(officeNum)
    })
})