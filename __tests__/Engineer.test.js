const Engineer = require('../lib/Engineer');

test('Testing class Engineer structure', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});

test('Checking testname to be name', () => {
    const testName = 'colton';
    const e = new Engineer(testName);
    expect(e.name).toBe(testName);
});

test('Checking testId to be id', ()=> {
    const testId = 40;
    const i = new Engineer(testId);
    expect(i.id).toBe(testId);
});

test('Checking testEmail to be email', () => {
    const testEmail = 'colton@gmail.com';
    const e = new Engineer(testEmail);
    expect(e.email).toBe(testEmail);
});

test('Checking officeNum to be officeNumber', () => {
    const officeNum = 75;
    const e = new Engineer(officeNum);
    expect(e.officeNumber).toBe(officeNum);
})