const Manager = require('../lib/Manager');


test('Testing class Manager structure', () => {
    const e = new Manager();
    expect(typeof(e)).toBe('object');
});

test('Checking testname to be name', () => {
    const testName = 'colton';
    const e = new Manager(testName);
    expect(e.name).toBe(testName);
});

test('Checking testId to be id', ()=> {
    const testId = 40;
    const i = new Manager(testId);
    expect(i.id).toBe(testId);
});

test('Checking testEmail to be email', () => {
    const testEmail = 'colton@gmail.com';
    const e = new Manager(testEmail);
    expect(e.email).toBe(testEmail);
});

test('Checking officeNum to be officeNumber', () => {
    const officeNum = 75;
    const e = new Manager(officeNum);
    expect(e.officeNumber).toBe(officeNum);
})