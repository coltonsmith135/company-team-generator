const Employee = require('../lib/Employee');

test('Checking class Employee structure', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
})


test('Checking testName to be name', () => {
    const testName = 'John';
    const e = new Employee(testName)
    expect(e.name).toBe(testName)
})