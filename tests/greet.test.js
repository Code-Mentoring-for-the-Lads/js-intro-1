const greet = require('../Tasks/greet');

test('greet function should return a greeting message', () => {
    expect(greet('Northcoders')).toBe('Hello, Northcoders');
    expect(greet('World')).toBe('Hello, World');
    expect(greet('')).toBe('Hello, ');
    expect(greet('John Doe')).toBe('Hello, John Doe');
    expect(greet('123')).toBe('Hello, 123');
});
