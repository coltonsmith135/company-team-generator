const Intern = require('../lib/Intern');


test('Testing class Intern structure', () => {
    const e = new Intern();
    expect(typeof(e)).toBe('object');
});

it('Checking testname to be name', () => {
   expect(Intern([this.name])).toBe('colton')
});

it('Checking testId to be id', ()=> {
   expect(Intern([this.id])).toBe(30)
});

it('Checking testEmail to be email', () => {
    expect(Intern([this.email])).toBe('coltonsmith135@yahoo.com')
});

it('Checking to make sure school is school', () => {
    expect(Intern([this.getSchool()])).toBe('milwaukie')
})