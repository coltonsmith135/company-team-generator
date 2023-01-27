const Engineer = require('../lib/Engineer');

test('Testing class Engineer structure', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});


it('Checking testname to be name', () => {
   expect(Engineer([this.name])).toBe('mikey')
});

test('Checking testId to be id', ()=> {
   expect(Engineer([this.id])).toBe(660)
});

test('Checking testEmail to be email', () => {
    expect(Engineer([this.email])).toBe('mike@yahoo.com')
});

test('Checking github to be github', () => {
    expect(Engineer([this.getGithub()])).toBe('mikey135')
})